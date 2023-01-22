---
layout: project.njk
title: LiveRail HSR
blurb: A timetable app for the Taiwan HSR
img_src: railtimehsr.webp 
tags: projects
site_url: https://liverail.terrankroft.com/
repo_url: https://github.com/itemic/LiveRail
appstore_url: https://apps.apple.com/app/live-rail-for-hsr/id1550589269
colour: FFA726
---

## Overview

Live Rail for HSR is a transit app designed for Taiwan's High Speed Rail (HSR) system. Users can find departing train services for each station or available services between stations. The premise of the app is to be able to provide train service details quickly and easily without having to navigate through a bunch of menus. Additional useful "at-a-glance" features are planned to make the app even more useful for power users.

## Purpose & Motivation

I don't have the best track record for personal projects. During my undergrad years (not so long ago, actually, but writing it like this makes it seem so far away...), I'd come up with an idea and work on it for an evening. At the end of the night, I'd push what I wrote up to GitHub and tell myself I'll come back to it tomorrow and draw up grand plans (read: scope creep) that would sit in my GitHub gathering virtual dust. Most of the projects I worked on I definitely enjoyed, and worked in the sense that I learned something out of working on them; they just never reached a point where I could ship them.

All my personal project attempts involve public transit to some extent. A good friend of mine made one for PT in [New Zealand](https://waka.app)[^1]. Similar apps are available in Taiwan, where I'm residing at the moment[^2]. While they do work, I wanted something that was not only easier to use, but also one that had a more aesthetically-pleasing interface. I wanted to make an app I would use myself.

To make sure I didn't head straight into scope creep, I limited myself to the high speed rail system. Compared to the other modes of PT in Taiwan, the HSR is the simplest: there is only one line with 12 stations. It would also have two main features: departures board and search. I allowed myself to add a few nice-to-have features here and there but only after I had the main functionality implemented. As of now, these tentpole features are more or less done and shipped, so now I can add quality-of-life fixes.

This project itself took about 2.5 weeks from conception to going live, not counting previous abandoned attempts. During this time, I worked on it daily and this project also happened to be my longest consecutive GitHub contributions streak[^3].

## Technologies

### SwiftUI

I started experimenting with SwiftUI just as the world slowly descended into lockdown last March when I needed something to do during my quarantine. I followed Paul Hudson's [Hacking with Swift](http://hackingwithswift.com) tutorial and did some experimenting of my own (transit app mockups, of course). When SwiftUI 2.0 was announced, I wanted to use its new features but didn't want to install the beta at the time, so went on a SwiftUI hiatus until after a few public betas came out.

I chose SwiftUI for this project because I wanted to try something new. The scope of the project was well-defined and it seemed like the perfect project to use it. Since SwiftUI is relatively new, I figured that the learning curve to understand it wouldn't be as high. Seeing live previews as I started designing also helped with keeping the momentum going.

### PTX

[PTX](https://ptx.transportdata.tw/PTX/) is Taiwan's open public transport API for all modes of transport. It offers data ranging from live bus data to bikeshare locations. Getting an API key is free and you get 20,000 API calls per day, but you can apply to have this increased.

## Process

oh god this is going to be a lot of writing i'll try to keep this brief but i'll take time so come back in a bit

## Lessons Learned

I learned a lot about SwiftUI. I would not call myself an expert in it just yet; property wrappers and animations still confuse me from time to time, but I think I now know enough to know what I don't know and where to look for help.

I also now know a bit about the app submission and review process. Apparently making a website that just says _email me if you have questions_ does not count as a App Support page.

## Future

I will be expanding the app with a number of features. Many of them are listed as issues in the GitHub repo. I also plan on making separate apps for the TRA (commuter rail) and buses. As I learn more about iOS app development, I'll be able to come back to improve this app as well. The goal is to eventually integrate all these modes into a single app while maintaining the principle of being quick and easy to use.

## Explore

The app is live on the App Store worldwide (link above!). I am also in the process of building a mini-site for the app itself as well which will actually showcase its features.

[^1]: You should use this too.
[^2]: Hi, residing at the moment.
[^3]: If you know me you'll know that I really like streaks.