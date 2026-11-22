# Detailed solution - A349

Apply a common-mode change $v_c$ to the outputs and follow it through the sensing resistors and the CMFB pair M13–M14, whose current change is mirrored by M15–M17 and injected directly into the outputs through the cascodes M18/M19. The loop gain is the injected transconductance times the common-mode output resistance, which now includes the CMFB cascode branches.

### Step 1 — Sensing and the CMFB pair

The two equal resistors place the output common mode $v_c$ on the gate of M13; the gate of M14 is at $V_{CMREF}$. M13–M14 form a p-channel pair with tail M12. The drain of M13 goes to ground, so its current is discarded; the drain of M14 feeds the diode-connected M15. When $v_c$ rises, M13's current falls and M14's rises, each by

$$
\Delta i_{14}=\frac{g_mv_c}2 ,
$$

since M12 fixes their sum. Only this half of the pair's differential current is used.

### Step 2 — Injection at the outputs

M15 mirrors $\Delta i_{14}$ 1:1 to M16 and M17. Through the cascodes M18 and M19 (gates at $V_{NB2}$) they sink the extra current $g_mv_c/2$ directly from each output:

$$
i_{inj}=\frac{g_m}2v_c\quad\text{per output}.
$$

### Step 3 — Common-mode output resistance

Each output node now has three cascode branches in parallel:

- up: M6 over the folding node; for common-mode signals the input pair's total current is fixed by M3, so the folding node sees only $r_{ds4}$ and $R\approx g_mr_{ds}^2$;
- down: M8 over M10, $R\approx g_mr_{ds}^2$;
- the CMFB branch: M18 over M16 (M19 over M17), $R\approx g_mr_{ds}^2$.

Hence

$$
R_{out,cm}=\frac{g_mr_{ds}^2}3 ,
$$

neglecting the large sensing resistors.

### Step 4 — Loop gain

The injected current lowers the outputs:

$$
LG=\frac{v_o}{v_c}=-\frac{g_m}2\cdot\frac{g_mr_{ds}^2}3=-\frac{(g_mr_{ds})^2}6 .
$$

A nodal check gives a coefficient of $-0.165$. The feedback is negative. The only high-impedance node in the loop is the output (the mirror node M15 is a low-impedance diode), so the load capacitors alone compensate the common-mode loop. This gives much better frequency behaviour than a scheme whose CMFB amplifier drives the gates of the bottom current sinks, which puts a second high-impedance node in the loop.
