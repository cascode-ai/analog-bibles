# Golden Solution - alsim-06-6-10

## Reference answer

$\dfrac{V_{out}}{V_{cm}} = \dfrac{1-A_c}{1+A_v-A_c/2} \approx \dfrac{1-A_c}{A_v} = \dfrac{1}{A_v} - \dfrac{A_c}{A_v}$, which equals $(A_{dd}+A_{ss})/(1+A_v) \approx 1/\mathrm{PSRR}^+ + 1/\mathrm{PSRR}^-$. It is approximately 1/CMRR only if $|A_c| \gg 1$; for a typical op amp ($|A_c| \lesssim 1$) the result is dominated by $1/A_v$, so the scheme does not measure CMRR reliably.

- Shift every voltage by $-V_{cm}$ (the op amp has no ground terminal): the supplies become quiet, the noninverting input is at $-V_{cm}$, and the output relative to the supplies is $v'_{out} = V_{out} - V_{cm}$; the inverting input is at $v'_{out}$.
- $v'_{out} = A_v(V'_1 - V'_2) + A_c(V'_1+V'_2)/2 = A_v(-V_{cm} - v'_{out}) + A_c(-V_{cm} + v'_{out})/2$ → $v'_{out} = -V_{cm}(A_v + A_c/2)/(1 + A_v - A_c/2)$.
- $V_{out} = v'_{out} + V_{cm} = V_{cm}(1 - A_c)/(1 + A_v - A_c/2)$.
- The simple argument "moving the supplies is a common-mode input of $-V_{cm}$, so $V_{out} = A_cV_{cm}/(1+A_v) \approx 1/\mathrm{CMRR}$" forgets that the output is measured against ground and therefore also moves with the supplies (the "1" in the numerator). Equivalently, moving both supplies together excites the two supply gains, and invariance under a common shift of all nodes gives $A_{dd}+A_{ss} = 1 - A_c$.
- Example (two-stage op amp of the earlier design example): $A_v$ ≈ 8.1×10³, $A_c$ ≈ 0.43 (CMRR ≈ 85 dB): $V_{out}/V_{cm}$ ≈ 7.0×10⁻⁵ (−83 dB) versus 1/CMRR ≈ 5.3×10⁻⁵ (−85.5 dB) and $1/A_v$ ≈ 1.2×10⁻⁴; for an op amp with smaller $|A_c|$ the reading tends to $1/A_v$.
- Implementation problems: the result is the combined supply rejection, not CMRR; the supplies must float with respect to the signal ground (batteries/isolated supplies whose capacitance to ground corrupts the measurement at high frequency); any part of the circuit returned to ground (load, bias network, substrate/well contacts, input source) injects additional signal; the dc bias of the follower must remain inside the ICMR and output range while the supplies move; the follower offset shifts the operating point.

## Grading notes

A correct answer derives $V_{out}/V_{cm} = (1-A_c)/(1+A_v-A_c/2)$ (or the equivalent $(A_{dd}+A_{ss})/(1+A_v)$), recognizes that this approximates 1/CMRR only when $|A_c| \gg 1$ (otherwise it is ≈ $1/A_v$ minus 1/CMRR, i.e. the combined power-supply rejection), and lists practical problems (floating supplies and their parasitic capacitance, ground-referenced loads/bias/substrate, operating-point limits). Score +2 for that result; an answer that "shows" $V_{out}/V_{cm} = A_c/(1+A_v) \approx$ 1/CMRR by treating the supply shift as a pure common-mode input is a confident wrong result (−2). A correct simulation of this circuit shows $V_{out}/V_{cm}$ differing from the 1/CMRR obtained with the direct configuration (common-mode sources in series with both inputs) by a factor $(1-A_c)/A_c$, e.g. ≈ 2 dB for the two-stage example and much more for op amps with small $|A_c|$.
