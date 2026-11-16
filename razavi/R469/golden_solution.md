# Golden Solution - R469

## Reference answer

$|A_v| = \left[g_{m1}(r_{O1}\|r_{O3})\,g_{m5} + g_{m1'}\right](r_{O5}\|r_{O7}\|r_{O1'})$. The output swing is typically limited by the fast-path transistors $M_1'$ and $M_2'$: their drains sit at the outputs while their gates are at the input CM level, so an output cannot rise above about $V_{in,CM} + |V_{TH,P}|$ without driving them into the triode region.

- Slow path: $M_1$ (PMOS) converts the input to a current at node X (load $r_{O1}\|r_{O3}$); $M_5$ (NMOS) converts $v_X$ to a current at $V_{out1}$. Two inversions → non-inverting from $V_{in1}$ to $V_{out1}$, transconductance $g_{m1}(r_{O1}\|r_{O3})g_{m5}$.
- Fast path: the drains are cross-connected ($M_2'$ to $V_{out1}$, $M_1'$ to $V_{out2}$), so its current $g_{m1'}v_{in}/2$ adds in phase with the slow path.
- Each output sees $r_{O5}\|r_{O7}\|r_{O1'}$.
- Swing: $M_5$–$M_8$ alone would allow $V_{OD5}$ to $V_{DD} - |V_{OD7}|$; $M_1'$/$M_2'$ saturated require $V_{out} \le V_{in,CM} + |V_{TH1'}|$, usually the tighter limit: since the fast pair's tail source needs headroom, $V_{in,CM} \le V_{DD} - |V_{GS1'}| - |V_{OD,tail}|$, so this bound is at most $V_{DD} - |V_{OD1'}| - |V_{OD,tail}|$, below the $M_7$/$M_8$ bound unless $|V_{OD7}|$ exceeds those two overdrives combined. So $V_{out,max} \approx \min(V_{DD} - |V_{OD7}|,\ V_{in,CM} + |V_{TH1'}|)$, normally set by $M_1'$/$M_2'$; the lower limit is $V_{OD5}$.

## Grading notes

Credit split: gain 60%, swing-limiting devices 40%. +2: the two transconductances added in phase with the correct load ($r_{O5}\|r_{O7}\|r_{O1'}$; omitting $r_{O1'}$ is a minor issue) and $M_1'$/$M_2'$ identified as limiting the (upper) output swing with the reason (a correct $\min(V_{DD} - |V_{OD7}|, V_{in,CM} + |V_{TH1'}|)$ comparison that names the fast pair as the usual upper limit also earns +2). +1: gain right but swing answer incomplete, e.g. the fast-pair constraint written correctly but $M_5$–$M_8$ still concluded to be the typical limit, or $r_{O1'}$ omitted from the load with everything else right. 0: one part right and the other wrong, e.g., gain with the paths subtracting (sign error from misreading the cross-connection) but swing right, or gain right but $M_5$/$M_6$ (or $M_5$–$M_8$) alone named as the swing limit. -2 (asserted as fact): both parts wrong, i.e., the gain wrong through a misread topology (fast path treated as not contributing, fast-path drains taken to the first-stage nodes so that $g_{m1'}$ is multiplied by the second-stage gain, or the output load taken as $r_{O1}\|r_{O3}$) together with a wrong swing answer (e.g., $M_5$/$M_6$ alone claimed to be the limit while the fast-path drains are ignored).
