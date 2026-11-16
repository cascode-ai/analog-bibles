# Golden Solution - A311

## Reference answer

$W_{18}/L_{18} \approx 13.5$, $W_{19}/L_{19} \approx 4.8$, $W_{22}/L_{22} \approx 10.4$ (M22 is the n-channel output device), $W_{21}/L_{21} \approx 53$ (M21 is the p-channel output device).

Bias: M18's drain goes to $V_{SS}$ and M19's drain to $V_{DD}$ (they are not in series); M17 feeds M18 ($I_{18} = I_{17} = 100$ µA) and M19 feeds M20 ($I_{19} = I_{20} = 100$ µA), since the gates of M22 and M21 draw no current. With the gate node at 0 V, the source of M18 (gate of M22) is at +1.5 V and the source of M19 (gate of M21) is at −1.5 V. With $v_{out} = 0$: $V_{GS22} = 1.5$ V, $V_{SG21} = 1.5$ V.
- M18 (PMOS, $V_{BS} = 2.5 - 1.5 = 1.0$ V): $|V_T| = 0.7 + 0.57(\sqrt{1.8} - \sqrt{0.8}) = 0.955$ V; $W/L = 2(100\ \mu)/[50\ \mu(1.5 - 0.955)^2] = 13.5$.
- M19 (NMOS, $V_{SB} = -1.5 + 2.5 = 1.0$ V): $V_T = 0.7 + 0.4(\sqrt{1.7} - \sqrt{0.7}) = 0.887$ V; $W/L = 2(100\ \mu)/[110\ \mu(0.613)^2] = 4.84$.
- M22 (NMOS, source at 0 V, $V_{SB} = 2.5$ V): $V_T = 0.7 + 0.4(\sqrt{3.2} - \sqrt{0.7}) = 1.081$ V; $W/L = 2(100\ \mu)/[110\ \mu(0.419)^2] = 10.4$.
- M21 (PMOS, source at 0 V, $V_{BS} = 2.5$ V): $|V_T| = 0.7 + 0.57(\sqrt{3.3} - \sqrt{0.8}) = 1.226$ V; $W/L = 2(100\ \mu)/[50\ \mu(0.274)^2] = 53$.
(Without the body effect all four would be 6.25 (PMOS) and 2.84 (NMOS); the body effect, set by the drawn bulk connections, more than doubles them, most strongly for the output devices whose sources sit 2.5 V from their bulks.)

## Grading notes

+2: all four ratios within ±5% of 13.5, 4.84, 10.4 (M22, n-channel) and 53 (M21, p-channel), with the body effect included and the correct source voltages (±1.5 V, 0 V). +1: one ratio off through an arithmetic slip, or body-effect threshold values right with a slip in one $V_T$. 0: body effect neglected (6.25, 2.84, 2.84, 6.25) with an otherwise correct method; or the M21 and M22 values interchanged (10.5 for M21, 55 for M22), which assigns the n-channel size to the p-channel device. 0 also when $W_{18}/L_{18}$ and $W_{19}/L_{19}$ are right but the output devices M21/M22 are misread (wrong type or source node), so that only those two ratios are wrong. −2 (asserted as fact): wrong currents (e.g., 50 µA per device), the 1.5 V gate drive applied with the wrong sign so that all four ratios are wrong, or square-law formula errors (missing the factor 2).
