# Golden Solution - R273

## Reference answer

The gain is essentially unchanged from the defect-free value: $|A_v| \approx g_{m1}(r_{O2}\|r_{O4})\Big(1 - \dfrac{1}{2g_{m3}R_1}\Big)$, because $R_1$ connects two low-impedance nodes ($\approx 1/g_{m3}$ and $\approx 1/(2g_{m1})$) and diverts only a small part of the signal current.

- With the output shorted: $i_1 - i_2 = g_{m1}v_{in}$; KCL at P gives $v_P = i_{R}/(2g_{m1})$ (small); $R_1$ carries $i_R \approx v_F/R_1$ with $v_F \approx -(g_{m1}v_{in}/2)/g_{m3}$; the output current is $i_1 - i_2 + i_R \approx g_{m1}v_{in}[1 - 1/(2g_{m3}R_1)]$. $R_{out}$ stays ≈ $r_{O2}\|r_{O4}$.
- Exact result ($g_{mN}, r_N$ for $M_{1,2}$; $g_{mP}, r_P$ for $M_{3,4}$): $A_v = \dfrac{g_{mN}r_Nr_P(1+2g_{mP}r_P)[2R_1(1+g_{mN}r_N)+r_N]}{2\{2R_1(r_N+r_P)(1+g_{mN}r_N)(1+g_{mP}r_P) + r_N[r_N(1+g_{mN}r_P+g_{mP}r_P) + 2r_P(1+g_{mP}r_P)]\}}$, which tends to the defect-free $g_{mN}(r_N\|r_P)\dfrac{1+2g_{mP}r_P}{2(1+g_{mP}r_P)}$ as $R_1 \to \infty$.
- $R_1$ breaks the symmetry, so the circuit has a nonzero common-mode gain and $V_{out}/(V_{in1} - V_{in2})$ depends on how the input is applied; the results above are for a balanced input ($V_{in1} = -V_{in2}$). With $g_mr_O \gg 1$ and $D = 2g_{mN}g_{mP}R_1(r_N+r_P) + (g_{mN}+g_{mP})r_N + 2g_{mP}r_P$: balanced, $A_v = g_{mN}g_{mP}r_Nr_P(1+2g_{mN}R_1)/D$; $V_{in1}$ alone ($V_{in2} = 0$), $2g_{mN}^2g_{mP}R_1r_Nr_P/D$; $V_{in2}$ alone, $2g_{mN}g_{mP}r_Nr_P(1+g_{mN}R_1)/D$. For equal $g_m$ and $r_O$ these are $g_m(r_O/2)$ times $(1+2g_mR_1)/[2(1+g_mR_1)]$, $g_mR_1/(1+g_mR_1)$ and 1, respectively; all tend to $g_{m1}(r_{O2}\|r_{O4})$ for large $R_1$.
- (At dc, $R_1$ also carries a bias current that the mirror copies to the output, causing a systematic offset; the small-signal gain above assumes the devices remain saturated.)

## Grading notes

+2: concludes the gain is approximately $g_{m1}(r_{O2}\|r_{O4})$, reduced only by a small factor of order $1/(g_{m3}R_1)$ (or gives the exact expression), with the reason that $R_1$ sits between low-impedance nodes. $R_1$ breaks the symmetry, so the result depends on how the input is applied: a balanced input is the default reading, and an answer that states another drive (e.g. $V_{in1}$ or $V_{in2}$ alone) and gives the matching result in the reference earns the same credit. +1: correct conclusion with a vague or slightly wrong correction factor. 0: exact algebra attempted with a slip, but the conclusion "nearly unchanged" stated. -2 (asserted as fact): $R_1$ claimed to reduce the gain drastically (e.g., to $g_mR_1$ or $g_m(r_O\|R_1)$), the gain doubled, or $R_1$ read as connected to the output.
