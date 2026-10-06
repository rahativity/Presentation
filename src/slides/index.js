import { LearningOverview, Welcome } from './Intro.jsx'
import {
  AestheticsUXConsistency,
  CorePrinciples,
  LayoutAwareness,
  MinimizeUserEffort,
  WhatIsUI,
} from './Principles.jsx'
import {
  InterfaceEvaluation,
  ProcessOverview,
  ScenarioStructure,
  StandardsPrototyping,
} from './Process.jsx'
import {
  MessageDesign,
  NavComponentsMenuTypes,
  NavigationDesign,
} from './Navigation.jsx'
import {
  InputControls,
  InputOverview,
  InputValidation,
  OnlineVsBatch,
} from './Input.jsx'
import { OutputCaseStudy } from './CaseStudy.jsx'
import { ActivitySummaryThankYou } from './WrapUp.jsx'

export const slides = [
  // 01–02: Introduction & Learning Overview
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
    title: 'Introduction to UI Design',
    section: 'principles',
    Component: WhatIsUI,
  },
  {
    id: 'core-principles',
    title: 'UI Design Principles',
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
    id: 'aesthetics-ux-consistency',
    title: 'Aesthetics, UX & Consistency',
    section: 'principles',
    Component: AestheticsUXConsistency,
  },
  {
    id: 'minimize-user-effort',
    title: 'Minimize User Effort',
    section: 'principles',
    Component: MinimizeUserEffort,
  },

  // 08–11: UI Design Process
  {
    id: 'process-overview',
    title: 'UI Design Process Overview',
    section: 'process',
    Component: ProcessOverview,
  },
  {
    id: 'scenario-structure',
    title: 'Scenario Development & Structure Design',
    section: 'process',
    Component: ScenarioStructure,
  },
  {
    id: 'standards-prototyping',
    title: 'Standards Design & Prototyping',
    section: 'process',
    Component: StandardsPrototyping,
  },
  {
    id: 'interface-evaluation',
    title: 'Interface Evaluation',
    section: 'process',
    Component: InterfaceEvaluation,
  },

  // 12–14: Navigation Design
  {
    id: 'navigation-design',
    title: 'Navigation Design',
    section: 'navigation',
    Component: NavigationDesign,
  },
  {
    id: 'nav-components-menu-types',
    title: 'Navigation Components & Menu Types',
    section: 'navigation',
    Component: NavComponentsMenuTypes,
  },
  {
    id: 'message-design',
    title: 'Message Design',
    section: 'navigation',
    Component: MessageDesign,
  },

  // 15–18: Input Design & Validation
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
    id: 'input-controls',
    title: 'Input Controls',
    section: 'input',
    Component: InputControls,
  },
  {
    id: 'input-validation',
    title: 'Input Validation',
    section: 'input',
    Component: InputValidation,
  },

  // 19: Output Design & Tune Source Case Study
  {
    id: 'output-case-study',
    title: 'Output Design & Tune Source Case Study',
    section: 'outputCaseStudy',
    Component: OutputCaseStudy,
  },

  // 20: Activity, Summary & Thank You
  {
    id: 'activity-summary-thank-you',
    title: 'Activity, Summary & Thank You',
    section: 'summary',
    Component: ActivitySummaryThankYou,
  },
]
