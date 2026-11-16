# Detailed solution - R432

**Approach.** $V_{b2}$ sets the source voltage of the PMOS cascode $M_5$, which is the drain voltage of the current source $M_7$. Too high a $V_{b2}$ lifts $M_5$'s source toward $V_{DD}$ and squeezes $M_7$ into triode; too low a $V_{b2}$ puts $M_5$'s gate too far below its drain (node X, pinned by $M_7$) and drives $M_5$ into triode. These two conditions give the window.

### Step 1 — PMOS gate–source voltage and the voltage at X

Each branch carries 0.5 mA, all devices have $W/L = 200$, and $\gamma = 0$:

$$
\begin{aligned}
|V_{OD}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.1302}\ \mathrm{V} = 0.361\ \mathrm{V},\\
|V_{GS}| &= 0.8 + 0.361 = 1.161\ \mathrm{V}\quad(\text{same for } M_5\text{–}M_8).
\end{aligned}
$$

$M_7$'s gate is at X (the drain of $M_3$/$M_5$) and its source at $V_{DD}$:

$$V_X = V_{DD} - |V_{GS7}| = 3 - 1.161 = 1.839\ \mathrm{V}.$$

$M_5$'s source, which is $M_7$'s drain, sits one $|V_{GS5}|$ above its gate:

$$V_{S5} = V_{D7} = V_{b2} + |V_{GS5}| = V_{b2} + 1.161\ \mathrm{V}.$$

### Step 2 — Upper bound: $M_7$ must stay saturated

$$
\begin{aligned}
V_{DD} - (V_{b2} + 1.161) &\ge 0.361\\
V_{b2} &\le 3 - 0.361 - 1.161 = 1.478\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Lower bound: $M_5$ must stay saturated

A PMOS drain may be at most one threshold above its gate. For $M_5$ (gate at $V_{b2}$, drain at X):

$$
\begin{aligned}
V_X &\le V_{b2} + |V_{THP}|\\
V_{b2} &\ge V_X - |V_{THP}| = 1.839 - 0.8 = 1.039\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — The right-hand side and the window

$M_8$ has the same gate voltage and current as $M_7$, so it gives the same upper bound. $M_6$ additionally needs $V_{out} \le V_{b2} + 0.8$ V; for output levels up to about $V_X$ this is no stricter than the condition on $M_5$. So

$$1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V},$$

a window of

$$1.478 - 1.039 = 0.44\ \mathrm{V} = |V_{THP}| - |V_{OD}|,$$

since the upper bound is $V_{DD} - |V_{OD}| - |V_{GS}| = V_{DD} - |V_{TH}| - 2|V_{OD}|$ and the lower bound $V_{DD} - |V_{GS}| - |V_{TH}| = V_{DD} - 2|V_{TH}| - |V_{OD}|$. The low-voltage cascode works only because $|V_{TH}|$ exceeds $|V_{OD}|$.

### Result

$$V_X - |V_{THP}| \le V_{b2} \le V_{DD} - |V_{OD7}| - |V_{GS5}|\ \Longrightarrow\ 1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V},$$

a window of $|V_{THP}| - |V_{OD}| \approx 0.44$ V. The lower bound keeps $M_5$ saturated (its drain X is at 1.84 V), the upper bound keeps $M_7$ saturated.

**Common mistake.** Giving a single "correct" value of $V_{b2}$. Any value within the window works; $V_{b2}$ only shifts the voltage at the $M_7$/$M_5$ junction.

**Common mistake.** Deriving the bounds as for a standard two-diode cascode mirror. Here X drives the gate of $M_7$ directly, so $V_X = 1.84$ V, and $M_5$ is biased by $V_{b2}$.

**Common mistake.** Reversing the bounds. Raising $V_{b2}$ threatens $M_7$ (upper bound); lowering it threatens $M_5$ (lower bound).
