---
title: "{{ replace .Name "-" " " | title }}"
layout: standalone
date: "{{ .Date }}"
draft: true
url: "/{{ .File.BaseFileName }}"
---

# This is the {{ .File.BaseFileName | title }} page!

Check me out.
