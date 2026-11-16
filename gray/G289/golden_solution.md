# Golden Solution - G289

## Reference answer

$f \approx 0.056$ just causes instability; $f \approx 0.0134$ gives a 60° phase margin.

Bode plots of $a(j\omega) = 200/[(1+jx)(1+jx/2)(1+jx/4)]$, $x$ in MHz:
- Gain: 46.0 dB flat at low frequency; asymptotes break to −20 dB/dec at 1 MHz, −40 dB/dec at 2 MHz, −60 dB/dec at 4 MHz. Values: 0.1 MHz 46.0 dB; 1 MHz 41.8 dB; 2 MHz 35.1 dB; 3.74 MHz 25.0 dB; 4 MHz 23.7 dB; 10 MHz 3.2 dB; 20 MHz −14.2 dB.
- Phase: 0° at low frequency; −10° at 0.1 MHz, −85.6° at 1 MHz, −135° at 2 MHz, −180° at 3.74 MHz, −184° at 4 MHz, −231° at 10 MHz, −250° at 20 MHz, → −270°.

Instability: the phase is −180° at $\omega_{180}$ = $\sqrt{14}$ × (2π × 1 MHz), i.e. 3.74 MHz, where $|a| = 200/11.25 = 17.8$ (25.0 dB). The loop gain $|a f|$ reaches 1 there when $f = 1/17.8 = 0.056$.

60° phase margin: the phase is −120° at 1.63 MHz, where $|a| = 74.8$ (37.5 dB). Setting $|a f| = 1$ there gives $f = 1/74.8 = 0.0134$.

## Grading notes

+2: Bode plots with correct dc gain (46 dB), break points and slopes, phase reaching −180° near 3.7 MHz; $f_{\text{instab}}$ ≈ 0.056 (±5%) and $f_{60°}$ ≈ 0.0134 (±7%). +1: both $f$ values right with a sketchy or partly missing plot, or one value slightly off from a graphical reading (within ±15%). 0: plots right but only one of the two $f$ values correct, or right method with a slip in both. −2 (asserted as fact): $f$ values from a wrong criterion (e.g. using the phase at the gain crossover of $a$ itself, or $f$ = 1/(gain at −135°) for the 60° case), or wrong pole/phase arithmetic giving clearly wrong values.
