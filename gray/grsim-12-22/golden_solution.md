# Golden Solution - grsim-12-22

## Reference answer

(a) $a_{cms} = 1$, $a_{dm-cms} = -0.005$.
- The midpoint voltage is $v_m = (R_{cs2}v_{o1} + R_{cs1}v_{o2})/(R_{cs1} + R_{cs2}) = (9.9v_{o1} + 10.1v_{o2})/20$.
- With $v_{o1,2} = v_{oc} \pm v_{od}/2$: $v_m = v_{oc} + \dfrac{9.9 - 10.1}{40}v_{od} = v_{oc} - 0.005v_{od}$. With unity followers and sense amplifier, $v_{cms} = v_m$.

(b) Op-amp gains without CMFB: $a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -66.7$, $a_{cm} \approx -1.96$, $a_{cmc} \approx -196$ ($g_{m1} = 1$ mA/V, $r_{o1} = 100$ kΩ, $r_{o3} = 200$ kΩ, $r_{o5h} = 100$ kΩ, $g_{m5h} = 1$ mA/V); the op amp itself is balanced.
- $v_{od} = a_{dm}v_{id}$ and $v_{oc} = a_{cm}v_{ic} + a_{cmc}(a_{cms}v_{oc} + a_{dm-cms}v_{od})$.
- $v_{od}/v_{id} = -66.7$; $v_{od}/v_{ic} = 0$.
- $v_{oc}/v_{ic} = a_{cm}/(1 - a_{cmc}a_{cms}) = -1.96/197 \approx -0.0100$.
- $v_{oc}/v_{id} = a_{cmc}a_{dm-cms}a_{dm}/(1 - a_{cmc}a_{cms}) = (-196)(-0.005)(-66.7)/197 \approx -0.33$. The sense-resistor mismatch converts the DM output into a CM output error, which the CMFB loop then imposes on $v_{oc}$.

(c) Expected simulation: $v_{od}/v_{id}$ ≈ −60 to −70, $v_{oc}/v_{ic}$ ≈ −0.01, $v_{od}/v_{ic}$ ≈ 0 (numerical floor), $v_{oc}/v_{id}$ ≈ −0.3, all within roughly 20% of the hand values for square-law models.

## Grading notes

(a) $a_{cms}$ = 1 and $a_{dm-cms}$ = −0.005 (sign per the stated orientation; +1 if only the magnitude is right). (b) The four gains −66.7, −0.010, 0, −0.33 (±10%). (c) A correct simulation reproduces these within about 20% (model-dependent), in particular a nonzero $v_{oc}/v_{id}$ of a few tenths and $v_{od}/v_{ic}$ ≈ 0. Credit split about equally among (a), (b), (c). Claiming $v_{oc}/v_{id} = 0$ (mismatch effect missed), or $v_{od}/v_{ic}$ nonzero for this balanced op amp, is a critical error.
