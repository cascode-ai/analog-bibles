# Detailed solution - A371

A single-pole comparator responds to an input transition with an exponential output transition, with no overshoot. Because it is inverting, the output starts at $V_{OH}$ while the input is low and falls toward $V_{OL}$ once the input rises. Locate the input's 50 % point, add the 20 µs propagation delay to locate the output's 50 % point, and choose the time constant so that the exponential crosses its midpoint there.

### Step 1 — Input 50 % point

The input ramps at 5 V/µs from 0 V at $t=5\ \mu$s to 10 V at $t=7\ \mu$s, so its midpoint, 5 V, is reached at

$$
t_{in,50}=6\ \mu\mathrm s .
$$

### Step 2 — Output 50 % point

The propagation delay is measured between the 50 % points, so the output crosses $(V_{OH}+V_{OL})/2$ at

$$
t_{out,50}=6\ \mu\mathrm s+20\ \mu\mathrm s=26\ \mu\mathrm s .
$$

### Step 3 — First-order output waveform

The input transition (2 µs) is much shorter than the response, so it can be treated as a step at its midpoint, $t=6\ \mu$s. A single-pole output then falls as

$$
v_O(t)=V_{OL}+(V_{OH}-V_{OL})\,e^{-(t-6\ \mu\mathrm s)/\tau},\qquad t>6\ \mu\mathrm s,
$$

and $v_O=V_{OH}$ before that. Reaching the midpoint 20 µs after the step requires $e^{-20\ \mu\mathrm s/\tau}=1/2$:

$$
\tau=\frac{20\ \mu\mathrm s}{\ln2}=28.9\ \mu\mathrm s .
$$

Solving the single-pole equation exactly for the 2 µs ramp gives the same time constant to within 0.1 %, so the step approximation is accurate here.

### Step 4 — Key features of the waveform

- Before 5 µs: $v_O=V_{OH}$ (inverting comparator, input low).
- From about 5–6 µs: the output begins to fall, steepest at the start; the curve is concave up (second derivative positive), with no overshoot.
- At $t=26\ \mu$s: $v_O=(V_{OH}+V_{OL})/2$.
- At $t=6\ \mu\mathrm s+\tau\approx35\ \mu$s: the output has completed 63 % of its swing.
- After $t\approx6\ \mu\mathrm s+4.6\tau\approx140\ \mu$s: the output is within 1 % of $V_{OL}$.

![Normalized output falling exponentially from VOH to VOL with its 50 % point at 26 µs, and the input ramp with its 50 % point at 6 µs](/q/A371/solution-waveform.svg)

The plot shows the exact single-pole response to the ramp, normalized as $(v_O-V_{OL})/(V_{OH}-V_{OL})$, together with the input scaled to $v_{in}/10$ V.
