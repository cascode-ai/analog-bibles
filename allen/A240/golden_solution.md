# Golden Solution - A240

## Reference answer

With mirror ratio $B = (W_3/L_3)/(W_2/L_2)$ = 100:
$\dfrac{v_{out}}{v_{in}} = \dfrac{(1+B)g_{m1}R_L}{1+(1+B)g_{m1}R_L}$, $R_{out} = \dfrac{1}{(1+B)g_{m1}} = \dfrac{1}{101g_{m1}}$ (not including $R_L$).
Numerically: $A_v$ ≈ 0.70 V/V and $R_{out}$ ≈ 21 Ω (≈ 15 Ω including $R_L$).

- The small-signal current of M1, $i_1 = g_{m1}(v_{in}-v_{out})$, enters the output node from M1's source; the same current flows in the diode M2 and is copied ×100 by M3 into the output. KCL at the output: $(1+B)g_{m1}(v_{in}-v_{out}) = v_{out}/R_L$.
- The local feedback multiplies the follower's transconductance by $1+B$, so $R_{out} = 1/[(1+B)g_{m1}]$.
- Bias: the 1-mA sink carries M1's current plus 100 times it (dc output at 0 V, so no dc load current): $I_{D1}$ = 1 mA/101 = 9.9 µA, $I_{D3}$ = 0.99 mA.
- $g_{m1} = \sqrt{2\cdot110\cdot100\cdot9.9}$ µS = 467 µS → $(1+B)g_{m1}$ = 47.1 mS → $R_{out}$ = 21.2 Ω; $A_v = 2.357/3.357$ = 0.702 ($(1+B)g_{m1}R_L$ = 2.36).

## Grading notes

+2: expressions with the $(1+B)$ = 101 factor, $I_{D1}$ ≈ 9.9 µA, $A_v$ ≈ 0.70 (0.68–0.72) and $R_{out}$ ≈ 21 Ω (or ≈ 15 Ω with $R_L$ stated). +1: correct expressions with M1's current taken as 10 µA or another small slip; or numbers right with the expression written without the general $B$. 0: expressions right but M1 biased at 1 mA (giving ≈ 2.1 Ω and 0.96), with the reasoning otherwise sound. −2 (asserted as fact): the mirror ignored ($R_{out} = 1/g_{m1}$ ≈ 2 kΩ), the mirror ratio inverted (1/100), or a gain above 1.
