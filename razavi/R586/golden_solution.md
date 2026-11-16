# Golden Solution - R586

## Reference answer

$C_1/C_2 \approx 8.2$ ($C_2$ ≈ 0.244 pF) with the first-order gain error; 8.27 ($C_2$ = 0.242 pF) with the exact expression.

- Actual gain: $|V_{out}/V_{in}| = C_1/[C_2 + (C_1 + C_2 + C_{in})/A_{v1}]$. The gain error is ≈ $(C_1 + C_2 + C_{in})/(C_2A_{v1})$, i.e., 1/(loop gain) with feedback factor $C_2/(C_1 + C_2 + C_{in})$.
- Setting it to 1%: $C_1 + C_2 + C_{in} = 10C_2$, so $C_2 = 2.2\ \mathrm{pF}/9 = 0.244$ pF and $C_1/C_2 = 8.18$.
- Exact ($x/(1 + x) = 1\%$ with $x = (C_1 + C_2 + C_{in})/(C_2A_{v1})$): $x = 0.0101$, $C_2 = 2.2/9.101 = 0.2417$ pF, ratio 8.27.

## Grading notes

+2: a nominal gain of 8.1–8.3, from the feedback factor $C_2/(C_1 + C_2 + C_{in})$. 0: right expression with an arithmetic slip. -2 (asserted as fact): $C_{in}$ or $C_2$ left out of the loading (giving ≈ 9.0–9.1), the gain error taken as $1/A_{v1}$ or $(C_1/C_2)/A_{v1}$, or a gain above 10 claimed.
