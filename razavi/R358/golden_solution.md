# Golden Solution - R358

## Reference answer

Miller's theorem replaces an impedance $Z$ between nodes X and Y by $Z/(1-A)$ from X to ground and $Z/(1-1/A)$ from Y to ground, where $A = V_Y/V_X$ is the voltage ratio the circuit establishes for the excitation being analyzed. This fails for the resistor's own noise because:
- The ratio $A$ is not known/valid for this excitation. The theorem holds only for the specific signal source that produced $A$; the noise source sits inside the floating resistor itself and drives both nodes, producing a different ratio $V_Y/V_X$ than the signal gain, so the precondition is not met.
- The noise current of the resistor leaves one node and enters the other: the two injections are equal and opposite, i.e., fully correlated. Splitting the resistor into two grounded Miller resistors, each with its own $4kT/R_{Miller}$ generator, replaces one correlated source by two independent ones, which gives the wrong output noise (correlation is lost).
- The Miller impedances are mathematical equivalents, not physical resistors at temperature T: their values depend on $A$ (they can be very large, very small or even negative when $A > 1$), so assigning them thermal noise $4kT/\mathrm{Re}\{Z_{Miller}\}$ is meaningless (a negative "resistor" would give negative noise power).
- Correct approach: keep the resistor floating, model its noise as a current source between X and Y (or a voltage source in series with it), and compute the output by superposition (or use the input-shorted/open methods).

## Grading notes

+2: explains that Miller's theorem is valid only for the excitation that sets the ratio $V_Y/V_X$ (a noise source inside the element is a different excitation), and/or that the resulting grounded resistors would carry independent noise sources while the real noise current enters the two nodes with full (opposite) correlation; mentioning that Miller resistors are not physical (can be negative) is a plus. +1: one of the two main points made correctly but without explanation, or only the "Miller resistors are not physical" argument. 0: vague statement ("Miller's theorem is only for signals") without a reason. -2 (asserted as fact): claims that Miller's theorem can be used with $4kT/(R/(1-A))$ noise at the input, that the noise splits by the gain ratio, or another incorrect physical explanation presented as the reason.
