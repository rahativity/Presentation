import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to the exact canvas size (1600x900 is the deck CANVAS_W/H)
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 2 });
  
  const pdfDoc = await PDFDocument.create();
  
  // 30 slides in the presentation
  for (let i = 1; i <= 30; i++) {
    console.log(`Capturing slide ${i}...`);
    await page.goto(`http://localhost:5173/#${i}`, { waitUntil: 'networkidle0' });
    
    // Wait for fonts to load and Framer Motion stagger animations to settle
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 2500));
    
    const screenshot = await page.screenshot({ type: 'png' });
    
    const image = await pdfDoc.embedPng(screenshot);
    
    // Add a blank page to the document
    const pdfPage = pdfDoc.addPage([1600, 900]);
    
    // Draw the PNG image on the page
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: 1600,
      height: 900,
    });
  }
  
  await browser.close();
  
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('Presentation.pdf', pdfBytes);
  console.log('Successfully saved to Presentation.pdf');
})();
