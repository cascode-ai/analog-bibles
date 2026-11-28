# Golden Solution - R083

## Reference answer

$V_{in} \approx 1.37$ V ($V_{out} \approx 0.669$ V, $V_{TH2} \approx 0.837$ V, $I_D \approx 2.99$ mA); $A_v \approx -1.90$.

- $M_2$'s source is the output: $V_{TH2} = 0.7 + 0.45(\sqrt{0.9 + V_{out}} - \sqrt{0.9})$.
- Equal currents: $\sqrt5\,V_{ov1} = 3 - V_{out} - V_{TH2}(V_{out})$ with $V_{out} = V_{ov1}$ at the edge → $V_{ov1} = 0.669$ V, $V_{in} = 1.369$ V.
- $\eta = \gamma/(2\sqrt{0.9 + 0.669}) = 0.180$; $A_v = -g_{m1}/(g_{m2} + g_{mb2}) = -\sqrt5/(1+\eta) \approx -1.90$.

## Grading notes

+2: $V_{in}$ ≈ 1.37 V (±0.01 V) and gain ≈ −1.90 (±3%), body effect in both the bias and the gain. +1: body effect in only one of the two (e.g., $V_{in}$ right but gain −2.24, or the 1.41-V bias with gain divided by 1+η), or one slip. 0: body effect ignored entirely (1.41 V, −2.24). -2 (asserted as fact): body effect applied to $M_1$ (source grounded), η added instead of dividing, or gain −5.
