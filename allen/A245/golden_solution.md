# Golden Solution - A245

## Reference answer

Circuit (the "current-mirror OTA"): M3 and M4 each become diode-connected PMOS loads, M3 carrying $i_{D1}$ and M4 carrying $i_{D2}$.

- M4 is mirrored (ratio 1:B) by a PMOS transistor whose drain goes directly to the output node (sourcing current $B\,i_{D2}$).
- M3 is mirrored (1:B, or 1:1) by a PMOS transistor into a diode-connected NMOS device, which is mirrored (1:1, or 1:B) by an NMOS transistor whose drain is the output node (sinking current $B\,i_{D1}$).
- Output current $i_{out} = B(i_{D2} - i_{D1}) = B g_{m1}v_{id}$ with $v_{id} = v_+ - v_-$ (+ input at M2, − input at M1 as in the figure; with the other assignment the roles of the two mirrors swap). Both the sourcing and the sinking device are driven by the signal, so the output is push–pull: it can source up to $BI_5$ and sink up to $BI_5$ (symmetric slew rate $BI_5/C_L$), unlike the class-A output of the original circuit, whose sinking (M7) current is fixed.

Gain: $A_v = B g_{m1}R_{out}$ with $R_{out} = r_{ds,P} \parallel r_{ds,N}$ of the two output transistors, i.e. $A_v \approx \dfrac{B g_{m1}}{g_{dsP} + g_{dsN}} = \dfrac{2Bg_{m1}}{(\lambda_N + \lambda_P)BI_5} = \dfrac{2g_{m1}}{(\lambda_N + \lambda_P)I_5}$, of the order of one $g_m r_{ds}$: the gain of a single stage, much less than the $\sim(g_m r_{ds})^2$ of a two-stage op amp.

To raise it to the two-stage level:
- Increase the output resistance by cascoding the output transistors (cascode or Wilson/regulated-cascode output mirrors): $R_{out} \sim g_m r_{ds}^2$, so $A_v \sim B g_{m1}g_m r_{ds}^2 \sim (g_m r_{ds})^2$.
- Alternatively, add a further common-source gain stage after the high-impedance output node, which makes the circuit a true two-stage amplifier (it then needs Miller compensation).
- A mirror ratio $B > 1$ (larger W/L of the output devices than of the diode devices) raises GB $= Bg_{m1}/C_L$ and the slew rate $BI_5/C_L$, but not the dc gain: the output devices carry $BI_5/2$, so $g_{dsP} + g_{dsN}$ grows with B as well and B cancels from $A_v$ (for fixed channel lengths).

## Grading notes

+2: a workable recombination (one mirror path straight to the output, the other through an additional mirror of the opposite type so that it sinks), push–pull action explained, gain identified as $\approx Bg_{m1}(r_{ds,P}\|r_{ds,N})$ (single-stage level), and a valid way to reach two-stage gain: cascoding the output (raising $R_{out}$ by ≈ $g_m r_{ds}$), or adding a further common-source gain stage after the high-impedance output node. +1: correct circuit, push–pull explanation and a valid gain-raising method, but the gain expression missing, or with the additional claim that B > 1 also raises the dc gain. 0: correct circuit and push–pull explanation with the gain increase given only as B > 1 (B cancels from the dc gain because the $g_{ds}$ of the output devices scales with their current $BI_5/2$; it raises only GB and SR); or the intended recombination with one mirror path wired so that it cannot work as drawn, together with sound reasoning about gain. −2 (asserted as fact): an arrangement in which the output does not respond to the differential input (e.g. both mirrors sourcing into the output, so that $B(i_{D1} + i_{D2}) = BI_5$ is constant), or the claim that the gain is already $(g_m r_{ds})^2$ without cascoding or an added stage.
