# Golden Solution - G011

## Reference answer

$g_m = 38.5$ mA/V, $r_\pi = 2.6$ kΩ, $r_o = 26$ kΩ, $r_\mu = 13$ MΩ, $C_\pi = 0.617$ pF ($C_b = 0.577$ pF + $C_{je} = 40$ fF), $C_\mu \approx 6.0$ fF, $C_{cs} \approx 9.3$ fF, $r_b = 200\ \Omega$, $r_c = 100\ \Omega$, $r_{ex} = 4\ \Omega$.

Circuit: B – $r_b$ – B′; $r_\pi \parallel C_\pi$ from B′ to the internal emitter E′ (voltage $v_1$); $r_{ex}$ from E′ to E; $r_\mu \parallel C_\mu$ from B′ to the internal collector C′; $g_mv_1$ and $r_o$ from C′ to E′; $r_c$ from C′ to C; $C_{cs}$ from C′ to substrate (ac ground).

- $g_m = 1/26$ A/V = 38.5 mA/V; $r_\pi = 100/g_m = 2.6$ kΩ.
- $r_o = 1/(\eta g_m) = 26\ \mathrm{V}/1\ \mathrm{mA} = 26$ kΩ; $r_\mu = 5\beta_0r_o = 13$ MΩ.
- $C_b = \tau_Fg_m = 0.577$ pF; $C_\pi = 0.577 + 0.040 = 0.617$ pF.
- $C_\mu = 10/\sqrt{1+1/0.55} = 5.96$ fF; $C_{cs} = 20/\sqrt{1+2/0.55} = 9.29$ fF.
- Placement of $C_{cs}$: the collector resistance and the collector–substrate junction are distributed, so a lumped model may put $C_{cs}$ at the internal collector C′ (as here) or at the external collector C. The two circuits are not identical, but they differ only through $r_cC_{cs} \approx 0.93$ ps (a corner near 170 GHz), so both are acceptable lumped conventions. The substrate may be shown as a separate terminal S (fixed dc bias) or as ac ground.

## Grading notes

+2: correct topology and all element values within ±5%. $C_{cs}$ connected from either C′ or the external collector C to the substrate is correct (lumping convention, see reference), and the substrate may be drawn as a terminal S or as ac ground; a remark that the two $C_{cs}$ placements differ negligibly at frequencies well below $1/(2\pi r_cC_{cs}) \approx 170$ GHz is correct. A sign slip in an intermediate linearization step whose final element (e.g. $r_\mu$ between B′ and C′) is right is trivial. +1: correct topology with one value wrong through a slip, or one parasitic element omitted. 0: topology right but two or three values wrong (e.g. $r_o$ from misreading η, junction capacitances not adjusted for bias). -2 (asserted as fact): wrong topology (e.g. $g_mv_1$ controlled by the external $v_{be}$, $r_\pi$/$C_\pi$ or $r_\mu$/$C_\mu$ connected to external rather than internal nodes, $r_o$ or the current source across the wrong nodes), or several values off by formula errors ($r_\pi = g_m/\beta_0$, $C_b = \tau_F/g_m$, $r_o = \eta/g_m$).
