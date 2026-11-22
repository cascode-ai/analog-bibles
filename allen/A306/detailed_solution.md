# Detailed solution - A306

In the open-loop test the op amp amplifies whatever dc error remains at its input by the full open-loop gain. The method is usable only while that amplified error leaves the output inside its linear range, so the allowed residual offset is the output headroom divided by the gain.

### Step 1 — Output with a residual offset

With the test signal at zero and a residual (uncancelled) offset $V_{OS,res}$ referred to the input,

$$
v_{OUT}=A_vV_{OS,res}.
$$

### Step 2 — Allowed offset

The output must stay between the supplies, $|v_{OUT}|<2.5$ V, so

$$
|V_{OS,res}|<\frac{2.5\ \mathrm V}{A_v}=\frac{2.5\ \mathrm V}{5000}=0.5\ \mathrm{mV}.
$$

The linear input window is only about 1 mV wide, ±0.5 mV around the input that gives $v_{OUT}=0$. If the residual offset exceeds about 0.5 mV, the output sits at a rail and the measured "gain" is meaningless.

### Step 3 — Practical margin

A real output saturates somewhat before the rails, and the test signal itself needs room to swing, so in practice the offset must be trimmed to a fraction of this limit, a few hundred microvolts or less.
