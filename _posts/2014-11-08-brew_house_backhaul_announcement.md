---
layout: post
title: Fermenting WiFi from the Brew House for the South Side Flats and Slopes
author: Adam Longwill
---

Ten stories above the South Side, four huge WiFi antennas are perched in their new roost. 

{:.img}
![View of downtown Pittsburgh from the Brew House with antennae in sight](/images/posts/brew_house_backhaul_announcement/brew_house_rooftop.jpg)

Meta Mesh is overjoyed to announce the completion of its most ambitious installation yet: a backhaul node comprised of four routers with sector antennas at the Brew House. This addition expands [PittMesh](http://www.pittmesh.net)'s availability from a few dozen Pittsburgh residents to a few thousand. 

This node is connecting the South Side Slopes and Flats with a 5 GHz, ad-hoc, backhaul network, identified by the “PittMesh_Backhaul” SSID. This node serves two of Pittsburgh’s most unique neighborhoods with a central connection point for [PittMesh](http://www.pittmesh.net), Pittsburgh’s most unique wireless network.

Where is the Brew House? It's the building *behind* the [nation's one-time largest outdoor clockface](https://en.wikipedia.org/wiki/Duquesne_Brewery_Clock), on the corner of 21st and Mary in the Flats. Unfortunately, this South Side clock building obfuscates the node to some parts of the South Side. Please see the [coverage map](#coverage-map) below for the estimated coverage area.

As a backhaul node, the Brew House node produces an ad-hoc mode connection--not the more common Client Mode type that is used in WiFi hotspots. This means that a smart phone, tablet, or laptop may not be able to see it, as it is meant for [OLSR](https://en.wikipedia.org/wiki/Optimized_Link_State_Routing_Protocol)-enabled routers.

This node does not serve as an Internet [gateway](https://en.wikipedia.org/wiki/Default_gateway). Rather, it acts as a central point through which residents can connect by aiming directional antennas at that are attached to their wireless access points or WiFi cards. So, if someone on 8th Street wants to connect to a friend on 24th, they can both point their 5 GHz antennas at the top of the Brew House behind the famous South Side clock tower to connect. 

Ideally, nodes connecting to the Brew House node will be a wireless router running Commotion Wireless firmware, obtainable from www.commotionwireless.net, which is based on [OpenWRT](https://openwrt.org/), a popular alternative to the firmwares shipped on most commodity routers available on-line and at brick-and-mortar retailers. However, any router running the [OLSR](https://en.wikipedia.org/wiki/Optimized_Link_State_Routing_Protocol) network protocol can connect for basic functionality.

Are you a technologist in the South Side who has always wanted a network to play on outside of the Internet? Here is your opportunity! To learn more about this unique, standalone network, find us on [ircs://irc.freenode.net:6697/%23PittMesh](Freenode IRC in the channel #PittMesh).

We now have the seed in the South Side to begin building a massive wireless Metropolitan Area Network! Please contact us if you are interested in hosting a node and we will be happy to assist you!

If you have any questions about [PittMesh](http://www.pittmesh.net), compatibility, or are interested in hosting a node or service on the network, feel free to send us an e-mail at info@metamesh.org. Keep your ears open for more upcoming announcements. We have a lot of really great things happening soon!

## Coverage Map

{:.img}
![coverage map of brew house node](/images/posts/brew_house_backhaul_announcement/brew_house_coverage_map.png)

## Technical Details

The Brew House node is comprised of four Ubiquiti 19 dBi, 120˚ sector antennas connected to four Ubiquiti [Rocket M5](http://www.ubnt.com/airmax/rocketm/) routers. The routers are connected to each other via a gigabit 
[Power-over-Ethernet](https://en.wikipedia.org/wiki/Power_over_Ethernet) switch. They are only broadcasting on 5 GHz, as they are meant to be backhaul-only.

We realize that the word “central” might be alarming to those familiar with mesh configuration. We anticipate this being simply the first of several node clusters constructed in the South Side and intend for it not to be the node in the South Side. We do greatly encourage South Side residents to set up their own nodes, including 5 GHz backhaul and 2.4 GHz client access, in order to expand the network backhaul throughout the area.

No Internet gateway is offered by Meta Mesh or the Brew House itself via this node.

*[SSID]: Service Set Identifier. The technical term for a wireless network’s human-readable name.
