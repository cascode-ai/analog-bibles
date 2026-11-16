# Golden Solution - A313

## Reference answer

$$\frac{v_{out}}{v_{in}} = \frac{g_{m1}g_{m4}}{g_{m2}g_{m4} + (g_{m2} + g_{ds1} + g_{ds2})(g_{m3} + g_{ds3} + g_{ds4})} \approx \frac{g_{m1}g_{m4}}{g_{m2}(g_{m3}+g_{m4})}$$
a positive (non-inverting) gain; if $g_{m3} = g_{m4}$ it is ≈ $g_{m1}/(2g_{m2})$.

Model: node X (drains of M1, source of M2, gate of M4) and the output node. M2 is a source follower (drain at $V_{DD}$, gate at $v_{out}$, source at X) loaded by M1; M4 is a common-source device loaded by the diode M3 ($g_{m3} + g_{ds3}$).
- KCL at X: $g_{m2}(v_{out} - v_x) - g_{ds2}v_x = g_{m1}v_{in} + g_{ds1}v_x$ → $v_x(g_{m2} + g_{ds1} + g_{ds2}) = g_{m2}v_{out} - g_{m1}v_{in}$.
- KCL at the output: $-(g_{m3} + g_{ds3})v_{out} = g_{m4}v_x + g_{ds4}v_{out}$ → $v_x = -(g_{m3}+g_{ds3}+g_{ds4})v_{out}/g_{m4}$.
- Eliminating $v_x$ gives the result. Physically, $v_{in}$ up pulls X down, M4 conducts less and $v_{out}$ rises; M2 feeds $v_{out}$ back to X (negative feedback), which sets the low gain. The same follows from the large-signal relations ($I_1 = I_2$, $I_3 = I_4$).

## Grading notes

+2: an expression equivalent to the reference (the $g_{ds}$ terms may be dropped where they add to $g_m$ terms), positive sign, with M2 correctly treated as an n-channel follower from $v_{out}$ to node X. +1: correct structure with a sign slip in one term or one $g_{ds}$ term misplaced, final form still ≈ $g_{m1}g_{m4}/[g_{m2}(g_{m3}+g_{m4})]$. 0: correct small-signal model and node equations but not solved, or solved with an algebra slip that changes the form. −2 (asserted as fact): M2 treated as a p-channel mirror device, giving $-g_{m1}g_{m4}/[g_{m2}g_{m4} - (g_{m3}+g_{ds4})(g_{ds1}+g_{ds2})]$ or ≈ $-g_{m1}/g_{m2}$; an inverting gain that comes from a wrong small-signal model or circuit reading; or the gain taken as $-g_{m1}/(g_{ds1}+g_{ds2})$ times a second-stage gain without the feedback through M2. A negative sign or extra term that arises only from an algebra slip after correct node equations is the 0 case, not −2.
