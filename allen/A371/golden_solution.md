# Golden Solution - A371

## Reference answer

The output starts at $V_{OH}$ (inverting comparator, input low), stays there until the input begins to rise at 5 µs, and then falls with a first-order (exponential, no overshoot) response toward $V_{OL}$, crossing $(V_{OH}+V_{OL})/2$ at $t \approx 26\ \mu$s.
- Input 50 % point: $v_{in} = 5$ V at $t = 6\ \mu$s (the ramp runs from 0 V at 5 µs to 10 V at 7 µs).
- Output 50 % point: $6 + 20 = 26\ \mu$s.
- First-order shape: approximating the 2-µs ramp by a step at its midpoint, $v_O(t) \approx V_{OL} + (V_{OH}-V_{OL})\,e^{-(t-6\,\mu s)/\tau}$ for $t > 6\ \mu$s with $\tau\ln 2 = 20\ \mu$s, i.e. $\tau \approx 28.9\ \mu$s. The output decays smoothly (steepest at the start, concave up), is about 2/3 of the way down at ≈ 35 µs, and is within 1 % of $V_{OL}$ after ≈ $6 + 4.6\tau \approx 140\ \mu$s.
- Sketch: input ramp 0 → 10 V between 5 and 7 µs; output flat at $V_{OH}$ until ≈ 5–6 µs, exponential fall, 50 % crossing at 26 µs, asymptote $V_{OL}$.

## Grading notes

+2: output initially at $V_{OH}$ and falling (inverting), exponential single-pole shape without overshoot, 50 % crossing at ≈ 26 µs (20 µs after the input midpoint at 6 µs). An answer that measures the delay from the start (5 µs) or end (7 µs) of the ramp and puts the crossing at 25 or 27 µs is fine if the reference instant is stated. Giving the time constant (≈ 29 µs) is a plus, not required. +1: correct shape and direction but the crossing time placed without justification or off by a few µs. 0: correct crossing time but a wrong shape (e.g., a linear ramp or a step). −2 (asserted as fact): output rising (noninverting), output switching instantly at 5 µs, or the 20 µs delay drawn as the full transition time from $V_{OH}$ to $V_{OL}$.
