---
title: Introducting TELOS Dreamstack
date: '2020-03-01'
description: 'A real-time fullstack framework for dApp development.'
---

TELOS DreamStack aims to facilitate faster time to market by providing a ready to go whitelabel apps and a well documented framework for building applications using TELOS and the latest frontend technology for performant user interfaces.

The ultimate goal of DreamStack is to provide a way to quickly jumpstart dApp development removing tech overhead and allowing you to focus on your business model and product features, reducing costs to develop high-quality dApps and functional proofs of concept.
DreamStack allows you to leverage collaboration as a competitive advantage.

DreamStack is the result of many years of experience building JavaScript applications, extensive research on modern development technologies and patterns, consultation with experts on every tool of the DreamStack and experience working with dev communities since 2010.

## GOALS

- Reduce the time and effort required to launch a new dapps.
- Reduce work duplication and maximize development synergy.
- Provide a real-time GraphQL API for balances and permissions
- Provide best in class dapp starters with adherence to clear design principles.
- Simplified developer on-boarding and training.
- Comprehensive documentation with software diagrams.
- Better developer experience and increased productivity.
- Facilitate consistency and maintainability.
- Out-of-the box code quality and deployment automation.
- Build a strong DreamStack developer community.

## TECHNICAL SUMMARY

The TELOS DreamStack Project is a full-stack real-time GraphQL dApp development framework that provides a set of tools, guidelines and multi-device whitelabel applications you can leverage to launch apps on the TELOS network and other EOSIO chains.

Application performance is a critical factor in the success of a project, and a major indicator of software quality. It is even one of the essential criteria that determine user satisfaction. DreamStack makes emphasis on meeting human-centric performance metrics such as Time To Interactive and First Contentful Paint.

< TTI Image >

Software maintainability is defined as the degree to which an application is understood, repaired, or enhanced; Developers spent most of their time understanding other people's code, and that is not a trivial endeavor; therefore, it is important to adhere to clear conventions so that the next developer has as little overhead as possible when reading your code.

< Maintainability >

dApps benefit from sharing a common codebase they all contribute to enhance and extend. The shared guidelines allows developers to avoid the context switching overhead when working on different applications or code bases; and for developers completely new to the technologies it is way easier to start with clear guidelines and starter repos.

## SPECIFICATIONS

The TELOS DreamStack features the most efficient technology and standards for building performant applications as of today. The technology selection was based on more than 10 years of experience building JavaScript applications, extensive research and collaboration with experts on the different tools of which the framework is composed.

We have chosen the stack carefully so that it allows us to write robust and performant ReactJS and React Native applications with more concise and readable code.

All the code follows Functional and Declarative style enforced by automated linting and formatting, as well as thoughtful peer reviews.

TypeScript is used to validate parameters at compile time allowing us to detect bugs earlier and reduce risk of introducing bugs at run time.

DreamStack is fully documented and it counts with it’s own telegram support group for support.

Online webinars, video tutorials, onsite workshops and hackathons will help foster the DreamStack dev community.

DreamStack is fully open source and it features applications starters for mobile, web and desktop with the following functionalities:

- Import key.
- 6 digit pin key encryption mobile and password for desktop.
- Read balances.
- Transfer.
- Push notifications.
- Create TLOS free accounts and profiles.

These starters are easily customizable / themeable through CSS in JS using ThemeUI and Emotion Mobile. The theme is saved as a JSON object you can customize with your color palette and typography easily.

## COMPONENTS

### GraphQL Engine

DreamStack GraphQL engine is composed of three components: Hasura GraphQL, EOSIO State sockets through Chronicle and a Reactive Demux service built with RXJS streams. Its Open Core supports real-time graph subscriptions to account balances and permissions.

Being open source developers can use the same technology for building custom real-time backends. Producers can potentially offer it as a service whitelisting contracts, tables and actions you want to subscribe to.

Key characteristic of DreamStack GraphQL.

- It handles EOSIO micro forks on the backend.
- Clients subscribe to state replicas and events rather than db deltas to derive state.
- It creates an actual graph of your on-chain data you use to make complex queries with all the power of Hasura GraphQL Engine.
- You can hook custom off chain GraphQL resolvers .
- You can subscribe to events for notifications and other actions.
- It allows complex and efficient queries and subscriptions.

### GraphQL Explorer

Interactive GraphQL explorer available at http://graph.telosdreamstack.io allows developers to explore the TELOS graph and try out their queries and subscriptions before implementing them in code.

### Mobile Starter

The DreamStack mobile starter is a React Native application built with Expo, a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase. This a great competitive advantage as you reduce costs and complexity of releasing and maintaining mobile apps.

Some of the Expo’s more prominent features are:

- Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with universal APIs.
- Build service gives you app-store ready binaries and handles certificates, no need for you to touch Xcode or Android Studio.
- Over-the-air updates let you update your app at any time without the hassle and delays of submitting to the store.

The TELOS DreamStack Mobile starter out-of-the-box is a ready to deploy minimal wallet, fully customizable and extensible that you can use as a base to kickstart your mobile projects. It provides the following functionality:

- Import private key.
- Secure key encryption with 6 digits passcode.
- Derive accounts from private keys.
- Real-time balance updates.
- Transfer funds.
- Push Notifications.

Instructions for deployment automation and app store submission will be provided as well as part of the docs.

### ReactJS Starter

A CRA ( create-react-app ) application with a fluid layout built using the latest frontend tech: CSS Grid, Flexbox, relative font-size in ems, viewport, fluid typography. All that based on ThemeUI components for consistency and design constraints. Responsive is so last decade.

It features out-of-the-box integration with Lynx, Scatter and EOS Auth through react hooks. And comes with demo views, transfer, state management and real-time balance subscription examples.

### Desktop Starter

A ready to go ElectronJS dApp boilerplate with the following functionality:

- Import private key.
- Secure key encryption with 8 char password.
- Derive accounts from key and real-time balance updates.
- Transfer funds.

It utilizes the same tooling and code style mentioned above and provides instructions for automating compilation for Windows, MacOS and Linux. This is the technology used by Spotify, Scatter and Anchor wallets.
