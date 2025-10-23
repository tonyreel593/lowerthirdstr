# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an OBS browser source for customizable lower thirds graphics. It's a standalone HTML file with embedded CSS and JavaScript that allows real-time editing of lower third overlays for streaming.

## Architecture

**Single-page application structure:**
- `lowerthirds.html` - Main and only HTML file containing all markup, styles, and JavaScript
- `style.css` - Currently empty, styles are embedded in the HTML `<style>` tag
- `Secuencia 01.mp4` - Sample video file (not part of the application)

**Key components:**
- `.controls` - Edit panel with file upload, font selector, and text input
- `.lower-third` - The actual lower third graphic display with logo and text
- JavaScript event handlers for real-time updates (logo upload, font changes, text changes)

## Development

**Testing the lower third:**
1. Open `lowerthirds.html` directly in a web browser
2. Use the controls to upload a PNG logo, select a font, and edit text
3. The lower third preview updates in real-time

**Using in OBS:**
1. Add a Browser Source
2. Check "Local file" and browse to `lowerthirds.html`
3. Set width to at least 600px and height to at least 120px
4. The controls section will be visible in the browser source but can be cropped in OBS

## Code Organization

All code is in a single HTML file with three sections:
- `<style>` block (lines 7-69) - All CSS styling
- HTML markup (lines 71-99) - Controls and lower third display
- `<script>` block (lines 101-133) - Event handling logic

The design uses a semi-transparent black background with a logo placeholder on the left and customizable text on the right.
