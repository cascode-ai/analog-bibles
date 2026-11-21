# Detailed solution - A239

For a 0.5-V input the output moves far from the quiescent point, so solve the large-signal circuit. Guess which device conducts, write KCL at the output with the square-law current, solve, and check the guess.

### Step 1 — Gate voltages and the likely state

With $v_{IN}=0.5$ V the batteries place the gates at

$$
V_{G1}=0.5+0.7=1.2\ \mathrm V,\qquad V_{G2}=0.5-0.7=-0.2\ \mathrm V.
$$

M2 conducts only if $V_{SG2}=v_{OUT}-(-0.2\ \mathrm V)>|V_{TP}|=0.5$ V, i.e. $v_{OUT}>0.3$ V. A positive input pushes the output up but by less than the input, so assume M2 is off and M1 alone supplies the load.

### Step 2 — KCL with M1 saturated

All of M1's current flows into $R_L$:

$$
\frac{K'_N}{2}\frac{W_1}{L_1}(V_{G1}-v_{OUT}-V_{TN})^2=\frac{v_{OUT}}{R_L},
\qquad
(2.5\ \mathrm{mA/V^2})(0.7\ \mathrm V-v_{OUT})^2=\frac{v_{OUT}}{500\ \Omega}.
$$

Multiplying by 500 Ω and writing $v=v_{OUT}$ in volts:

$$
1.25(0.7-v)^2=v\quad\Rightarrow\quad 1.25v^2-2.75v+0.6125=0,
$$

$$
v=\frac{2.75-\sqrt{2.75^2-4(1.25)(0.6125)}}{2(1.25)}=\frac{2.75-\sqrt{4.5}}{2.5}=0.2515 .
$$

The other root, 1.95 V, would make $V_{GS1}<V_{TN}$ and is rejected.

### Step 3 — Checks

- M2: $v_{OUT}=0.25\ \mathrm V<0.3$ V, so $V_{SG2}=0.45\ \mathrm V<0.5$ V and M2 is off, as assumed.
- M1: $V_{GS1}-V_{TN}=1.2-0.2515-0.5=0.45$ V, and $V_{DS1}=1.5-0.2515=1.25\ \mathrm V>0.45$ V, so M1 is saturated.
- Load current: $0.2515\ \mathrm V/500\ \Omega=0.50$ mA, all supplied by M1.

Hence

$$
v_{OUT}\approx0.25\ \mathrm V .
$$

The large-signal gain $0.25/0.5\approx0.5$ agrees with the small-signal gain of the loaded follower.
