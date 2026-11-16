# Golden Solution - A298

## Reference answer

$R_{out} \approx (g_{mN}r_{dsN}^2)\,\|\,(g_{mP}r_{dsP}^2) = 0.2\,g_{mN}r_{dsN}^2$; $A_v = k\,g_{mN}R_{out} = 0.2k\,(g_{mN}r_{dsN})^2$. With $g_{mN}r_{dsP} = 100$ ($g_{mN}r_{dsN} = 200$): $R_{out} = 40\,r_{dsN}$ and $A_v \approx 8\times10^3\,k$ (8000 V/V for k = 1, 8×10⁴ for k = 10).

- Output cascodes: n-channel M12/M11, $g_{mN}r_{dsN}^2$; p-channel M7/M6, $g_{mP}r_{dsP}^2 = g_{mN}r_{dsN}^2/4$; parallel: $0.2g_{mN}r_{dsN}^2$.
- The input currents $\pm0.5g_{mN}v_{in}$ in M1, M2 flow in the diodes M3, M4, are multiplied by k in M8 and M6, M8's current is turned around by M9–M11, and both add at the output: output current $k\,g_{mN}v_{in}$.

## Grading notes

+2: $R_{out}$ = 0.2 $g_{mN}r_{dsN}^2$ (or $0.8\,g_{mN}r_{dsP}^2$), $A_v = kg_{mN}R_{out}$, and the estimate 8000k (with k left symbolic or a stated k). +1: correct expressions with one slip. 0: treating the given product as $g_{mN}r_{dsN}$ = 100 (giving 2000k), or $R_{out}$ right with the gain missing k. −2 (asserted as fact): $R_{out}$ of a single branch or of a simple (non-cascode) output, the mirror gain or the M9–M11 turnaround omitted so that only half the current is counted, or a gain of order $g_mr_{ds}$ (≈ 100).
