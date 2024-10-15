
# GSAP Learning Path

## Stage 1: Core GSAP Methods and Basic Animations
Start by focusing on basic animations. These will give you the foundation for everything you build in GSAP.

### Start with:
- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`
- **Key Tween Properties:**
  - `duration`
  - `delay`
  - `ease`
  - `repeat`
  - `onComplete`, `onStart`

> These methods and properties help you create basic animations like moving objects, changing opacity, scaling elements, etc. Start simple by animating single properties.

### Next step:
- **Ease functions**: Play with different easing types (e.g., `ease: "power1.out"`) to make animations feel more natural.

---

## Stage 2: Timeline Control and Sequencing
Once you understand the basic animations, move to controlling multiple animations in sequence.

### Focus on:
- `gsap.timeline()`
- `timeline.to()`
- `timeline.from()`
- `timeline.add()`

> Timelines allow you to chain animations together, giving you fine control over when and how animations happen in sequence.

### Explore properties for control:
- `timeline.play()`, `timeline.pause()`, `timeline.reverse()`, `timeline.restart()`

> These properties let you start, stop, and reverse animations, adding interactivity to your animations.

---

## Stage 3: Advanced Control and Properties
After mastering timelines, dive into more advanced control and customization.

### Deepen your knowledge with:
- `gsap.set()` (set properties without animation)
- `gsap.killTweensOf()` (stop specific animations)
- `stagger` (apply delays between multiple elements)

> `stagger` is particularly useful when animating multiple elements in a group (e.g., fading in multiple images one after another).

---

## Stage 4: Essential Plugins
Once you're comfortable with core animations and timelines, start incorporating plugins to add more complexity and interactivity.

### Start with:
- **ScrollTrigger** – Triggers animations based on scroll position.
- **TextPlugin** – Animates text (e.g., typing effects).
- **Draggable** – Makes elements draggable, great for interactive elements.

### Next step:
- **ScrollToPlugin** – Smooth scrolling to specific points.
- **MotionPathPlugin** – Animate elements along custom paths.

---

## Stage 5: Advanced Plugins and Custom Animations
If you’re building complex projects like games, interactive web experiences, or SVG animations, move on to these plugins:

### Focus on:
- **MorphSVGPlugin** – Morph SVG shapes, perfect for creative SVG animations.
- **InertiaPlugin** – Add physics-based motion to make animations more dynamic and realistic.

### If needed:
- **SplitText** – Splits text into characters, words, or lines for granular text animations.

---

## Learning Path Summary:
1. **Start with core methods and tween properties** (`gsap.to()`, `gsap.from()`, `duration`, `delay`).
2. **Move to timelines** for sequencing (`gsap.timeline()`, `timeline.to()`).
3. **Dive into advanced control** (e.g., `stagger`, `killTweensOf()`).
4. **Add plugins** for more complex scenarios (start with **ScrollTrigger** and **TextPlugin**).
5. **Explore advanced plugins** (like **MorphSVG** and **MotionPath** for SVG animations).
