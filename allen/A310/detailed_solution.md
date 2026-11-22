# Detailed solution - A310

Hold the supplies fixed and use the summing source to step the output of the op amp under test. The servo loop then supplies exactly the input voltage the op amp needs for each output level, and the divider presents that microvolt-level input as a 1001-times larger voltage at $v_{OS}$. The ratio of the output step to the input step is the open-loop gain; taking a difference between two settings removes the input offset.

### Step 1 — Procedure

1. Set the two $v_{SET}$ sources in series with $V_{DD}$ and $V_{SS}$ to zero (or to any constant value) and keep them fixed.
2. Set the upper-right $v_{SET}$ to +1 V and record $v_{OS}$ as $V_{OS+}$.
3. Set it to −1 V and record $V_{OS-}$.
4. Compute $A_v=2002\ \mathrm V/|V_{OS+}-V_{OS-}|\approx2000\ \mathrm V/|V_{OS+}-V_{OS-}|$.

### Step 2 — The servo forces $v_{OUT}=v_{SET}$

The auxiliary op amp's inverting input is a virtual ground; the upper-right source puts $-v_{SET}$ at its 100-kΩ resistor, so

$$
\frac{v_{OUT}}{100\ \mathrm{k\Omega}}-\frac{v_{SET}}{100\ \mathrm{k\Omega}}=0\;\Rightarrow\;v_{OUT}=v_{SET}.
$$

The supplies are fixed now, so this is a genuine change of the output relative to the supplies.

### Step 3 — Input required by the op amp under test

With open-loop gain $A_v$ and input offset $V_{off}$, $v_{OUT}=A_v(v_I-V_{off})$, so

$$
v_I=\frac{v_{OUT}}{A_v}+V_{off}=\frac{v_{SET}}{A_v}+V_{off}.
$$

The loop supplies exactly this input automatically and keeps the op amp in its linear region; no manual offset trimming is needed. The divider gives $v_{OS}=(10010/10)\,v_I=1001\,v_I$:

$$
v_{OS}=1001\left(\frac{v_{SET}}{A_v}+V_{off}\right).
$$

### Step 4 — Offset cancellation and the gain

Subtracting the two readings removes the offset:

$$
V_{OS+}-V_{OS-}=\frac{1001\,(2\ \mathrm V)}{A_v}\;\Rightarrow\;A_v=\frac{2002\ \mathrm V}{|V_{OS+}-V_{OS-}|}=1001\,\frac{\Delta v_{OUT}}{\Delta v_{OS}} .
$$

This is the gain averaged over a ±1-V output swing; smaller steps around a chosen output level give the small-signal gain there. The intended load $R_L$, $C_L$ should be connected, and the auxiliary loop must be stable (an integrating auxiliary amplifier helps). If instead all three sources were moved together, both rails and the output would shift by the same amount, which is the CMRR measurement of the same fixture, not a gain measurement.
