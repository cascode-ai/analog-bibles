# Golden Solution - A294

## Reference answer

$R_{out} \approx 0.2\,g_{mN}r_{dsN}^2 = 20\,r_{dsN}$; differential gain $A_v = k\,g_{mN}R_{out} = 0.2k(g_{mN}r_{dsN})^2 = 2.0\times10^4$ V/V; first-stage gain ≈ −5 V/V.

- Output resistance: n-channel cascode M12/M11, $g_{mN}r_{dsN}^2$; p-channel cascode M7/M6, $g_{mP}r_{dsP}^2 = g_{mN}r_{dsN}^2/4$; in parallel $0.2\,g_{mN}r_{dsN}^2$.
- The input gives $\pm0.5g_{mN}v_{in}$ in M1 and M2; the diode loads M3 and M4 pass these currents to M8 and M6 multiplied by k; the M8 current is turned around by M9–M11, so the output current is $k\,g_{mN}v_{in}$ and $A_v = kg_{mN}R_{out} = 10\times0.2\times100^2 = 2.0\times10^4$.
- First stage: $0.5g_{mN}v_{in}$ into the diode M3 ($1/g_{m3}$, $g_{m3} = 0.1g_{mP} = 0.1g_{mN}$): $A_{v1} = -0.5g_{mN}/(0.1g_{mN}) = -5$.

## Grading notes

+2: $R_{out}$ ≈ 0.2 $g_{mN}r_{dsN}^2$, $A_v$ ≈ 2.0×10⁴ (1.75–2.2×10⁴; a full nodal solution that keeps $r_{ds}$ at the diode nodes gives ≈ 1.8×10⁴), first-stage gain magnitude ≈ 5 at one diode node ($g_{m1}/(2g_{m3})$; 4.4–5, with or without $r_{ds1}$ and $r_{ds3}$ at the node), or ≈ 10 (8.9–10) if the answer explicitly takes the first-stage output as the differential voltage between the two diode nodes. +1: one of the two gains with a slip. 0: $R_{out}$ right but one of the gains wrong. −2 (asserted as fact): $A_v$ ≈ 1.0×10⁵ or ≈ 1.1×10⁴ (the original data), k omitted from the gain, first-stage gain of order $g_mr_{ds}$, or $R_{out}$ from one branch only.
