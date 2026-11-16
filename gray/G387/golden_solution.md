# Golden Solution - G387

## Reference answer

$A_{dm} \approx -0.985$ and $A_{cm} \approx -0.0025$.

Op-amp gains ($g_{m1} = 1$ mA/V, $r_{o1} = 200$ kΩ, $r_{o3} = 400$ kΩ, $r_{o5h} = 200$ kΩ, $g_{m5h} = 1$ mA/V):
- $a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -133$.
- Open-loop CM gain $a_{cm} \approx -(R_{o(\text{down})}\|r_{o3})/r_{o5h} \approx -396\ \text{k}/200\ \text{k} = -1.98$; CMC gain $a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3}) \approx -396$.
- With the CMFB loop closed: $a'_{cm} = a_{cm}/[1 + a_{cms}(-a_{cmc})] = -1.98/397 \approx -0.0050$.

Closed loop (the 100-MΩ resistors do not load the outputs, whose resistances are a few hundred kΩ; inputs draw no current, so $v_{id} = (v_{sd} + v_{od})/2$ and $v_{ic} = (v_{sc} + v_{oc})/2$):
- $A_{dm} = -\dfrac{R_3}{R_1}\cdot\dfrac{T_{dm}}{1 + T_{dm}}$ with $T_{dm} = (-a_{dm})R_1/(R_1 + R_3) = 66.7$: $A_{dm} = -66.7/67.7 = -0.985$.
- $A_{cm} = -\dfrac{R_3}{R_1}\cdot\dfrac{T_{cm}}{1 + T_{cm}}$ with $T_{cm} = (-a'_{cm})/2 = 0.0025$: $A_{cm} \approx -0.0025$.

## Grading notes

Credit split equally between $A_{dm}$ and $A_{cm}$. +2: $A_{dm}$ = −0.98 to −0.99 (finite-gain correction included) and $A_{cm}$ ≈ −0.0025 (±10%), using the CM gain reduced by the CMFB loop. +1: $A_{dm}$ given as −1 (ideal) with the correct $A_{cm}$, or $A_{cm}$ given as $a'_{cm}/2 \approx -0.0025$ without showing the loop. 0: one of the two gains right; $A_{cm}$ computed with the open-loop $a_{cm} = -1.98$ (giving ≈ −0.50); or $A_{dm}$ ≈ −0.97 from using the wrong bias point ($a_{dm} = -66.7$) with everything else right. −2 (asserted as fact): $A_{cm} = -R_3/R_1 = -1$ (CM treated like DM), or both gains wrong.
