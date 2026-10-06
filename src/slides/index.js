import { LearningOverview, Welcome } from './Intro.jsx'
import {
  AestheticsUX,
  ConsistencyEffort,
  CorePrinciples,
  LayoutAwareness,
  WhatIsUI,
} from './Principles.jsx'
import {
  InterfaceEvaluation,
  InterfaceStructure,
  ProcessOverview,
  StandardsPrototyping,
  UseScenario,
} from './Process.jsx'
import {
  MenuTypes,
  MessageDesign,
  NavigationComponents,
  NavigationControls,
  NavigationPrinciples,
} from './Navigation.jsx'
import {
  DataCapture,
  InputControls,
  InputOverview,
  OnlineVsBatch,
  ValidationExamples,
  ValidationPipeline,
} from './Input.jsx'
import { OutputPrinciples, OutputTypes } from './Output.jsx'
import {
  ApplyingConcepts,
  TuneSourceJourney,
  TuneSourceOverview,
} from './CaseStudy.jsx'
import { ActivityDiscussion, SummaryThankYou } from './WrapUp.jsx'

export const slides = [
  // 01–02: Intro & Agenda
  {
    id: 'welcome',
    title: 'System Analysis & Design',
    section: 'intro',
    Component: Welcome,
  },
  {
    id: 'learning-overview',
    title: 'Learning Overview',
    section: 'intro',
    Component: LearningOverview,
  },

  // 03–07: UI Design Principles
  {
    id: 'what-is-ui',
    title: 'What is User Interface Design?',
    section: 'principles',
    Component: WhatIsUI,
  },
  {
    id: 'core-principles',
    title: 'Core UI Principles',
    section: 'principles',
    Component: CorePrinciples,
  },
  {
    id: 'layout-awareness',
    title: 'Layout & Content Awareness',
    section: 'principles',
    Component: LayoutAwareness,
  },
  {
    id: 'aesthetics-ux',
    title: 'Aesthetics & User Experience',
    section: 'principles',
    Component: AestheticsUX,
  },
  {
    id: 'consistency-effort',
    title: 'Consistency & Minimize User Effort',
    section: 'principles',
    Component: ConsistencyEffort,
  },

  // 08–12: UI Design Process
  {
    id: 'process-overview',
    title: 'UI Design Process Overview',
    section: 'process',
    Component: ProcessOverview,
  },
  {
    id: 'use-scenario',
    title: 'Use Scenario Development',
    section: 'process',
    Component: UseScenario,
  },
  {
    id: 'interface-structure',
    title: 'Interface Structure Design',
    section: 'process',
    Component: InterfaceStructure,
  },
  {
    id: 'standards-prototyping',
    title: 'Interface Standards & Prototyping',
    section: 'process',
    Component: StandardsPrototyping,
  },
  {
    id: 'interface-evaluation',
    title: 'Interface Evaluation',
    section: 'process',
    Component: InterfaceEvaluation,
  },

  // 13–17: Navigation Design
  {
    id: 'navigation-principles',
    title: 'Navigation Design Principles',
    section: 'navigation',
    Component: NavigationPrinciples,
  },
  {
    id: 'navigation-controls',
    title: 'Navigation Controls',
    section: 'navigation',
    Component: NavigationControls,
  },
  {
    id: 'navigation-components',
    title: 'Common Navigation Components',
    section: 'navigation',
    Component: NavigationComponents,
  },
  {
    id: 'menu-types',
    title: 'Menu Types',
    section: 'navigation',
    Component: MenuTypes,
  },
  {
    id: 'message-design',
    title: 'Message Design',
    section: 'navigation',
    Component: MessageDesign,
  },

  // 18–23: Input Design & Validation
  {
    id: 'input-overview',
    title: 'Input Design Overview',
    section: 'input',
    Component: InputOverview,
  },
  {
    id: 'online-vs-batch',
    title: 'Online vs Batch Processing',
    section: 'input',
    Component: OnlineVsBatch,
  },
  {
    id: 'data-capture',
    title: 'Data Capture Technologies',
    section: 'input',
    Component: DataCapture,
  },
  {
    id: 'input-controls',
    title: 'Input Controls',
    section: 'input',
    Component: InputControls,
  },
  {
    id: 'validation-pipeline',
    title: 'Input Validation',
    section: 'input',
    Component: ValidationPipeline,
  },
  {
    id: 'validation-examples',
    title: 'Validation Examples',
    section: 'input',
    Component: ValidationExamples,
  },

  // 24–25: Output Design
  {
    id: 'output-principles',
    title: 'Output Design Principles',
    section: 'output',
    Component: OutputPrinciples,
  },
  {
    id: 'output-types',
    title: 'Types of Outputs',
    section: 'output',
    Component: OutputTypes,
  },

  // 26–28: Tune Source Case Study
  {
    id: 'tune-source-overview',
    title: 'Tune Source Music Store',
    section: 'caseStudy',
    Component: TuneSourceOverview,
  },
  {
    id: 'applying-concepts',
    title: 'Applying Concepts at Tune Source',
    section: 'caseStudy',
    Component: ApplyingConcepts,
  },
  {
    id: 'tune-source-journey',
    title: 'Tune Source User Journey',
    section: 'caseStudy',
    Component: TuneSourceJourney,
  },

  // 29–30: Discussion & Summary
  {
    id: 'activity-discussion',
    title: 'Activity & Discussion',
    section: 'summary',
    Component: ActivityDiscussion,
  },
  {
    id: 'summary-thank-you',
    title: 'Summary & Thank You',
    section: 'summary',
    Component: SummaryThankYou,
  },
]
