# Golden Solution - R317

## Reference answer

With an ideal voltage-source drive there is no pole at the gates, and for differential signals the tail node is an ac ground. Each half circuit is then a CS stage whose only significant pole is at the output node: $H(s) \approx -\dfrac{A_0}{1 + s/\omega_p}$, with $A_0 = g_{m1}/g_{m3}$ (diode load) or $g_{m1}(r_{O1}\|r_{O3})$ (current-source load) and $\omega_p = 1/(R_{out}C_{out})$.
- A single pole contributes a phase lag of $\arctan(\omega/\omega_p)$, always less than 90°. At the unity-gain frequency $\omega_u = \omega_p\sqrt{A_0^2 - 1}$ the lag is $\arctan\sqrt{A_0^2 - 1} < 90°$.
- So the frequency-dependent phase shift is between 0 and 90° (or, counting the 180° of inversion, between 180° and 270°): never 135°. The right-half-plane zero from $C_{GD}$ lies near $g_m/C_{GD}$, far above $\omega_u$, and adds only a few degrees.
- With a diode-connected load the gain $g_{m1}/g_{m3}$ is often near or below unity, so a unity-gain crossing may not even exist.
- Reaching 135° requires a second pole (or a reactive load that creates a second-order response) at frequencies comparable to $\omega_u$.

## Grading notes

+2: identifies that with ideal drive and these loads the stage is first-order (only the output pole; no input pole, tail at ac ground), so the phase shift at unity gain is below 90° (or between 180° and 270° with the inversion counted), never 135°; mentioning that a second pole is needed is a plus. Also +2: an explicitly argued reading that counts the inversion as −180° and notes that reaching −135° would need a 45° phase lead, which a diode-connected or current-source load (a single RC-type pole) cannot provide. A reading that takes 135° as the principal angle 180° − 45° (so that a single pole with $A_0 = \sqrt2$ would suffice) contradicts the premise of the question and is not accepted; concluding from it that such a load can meet the requirement, or that the phase lag is too large, falls under -2. +1: single-pole argument given without addressing the inversion/sign convention or the unity-gain point. 0: says "not enough poles" without quantifying the 90° limit. -2 (asserted as fact): claims two or more significant poles exist with these loads and ideal drive, or claims the phase shift is too large (e.g., 180° from two poles) as the reason.
