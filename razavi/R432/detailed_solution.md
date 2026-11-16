# Detailed solution - R432

**Approach.** $V_{b2}$ sets the source voltage of the PMOS cascode $M_5$, which is the drain voltage of the current source $M_7$. If $V_{b2}$ is too high, $M_5$'s source rises toward $V_{DD}$ and squeezes $M_7$ into the triode region. If $V_{b2}$ is too low, $M_5$'s gate is too far below its drain (node X, which is pinned by $M_7$) and $M_5$ enters the triode region. These two conditions give the window.

### Step 1 — The circuit and the currents

Reading the figure: NMOS input pair $M_1$–$M_2$ (tail $I_{SS} = 1$ mA), NMOS cascodes $M_3$–$M_4$ ($V_{b1} = 1.7$ V), PMOS cascodes $M_5$–$M_6$ (gates at $V_{b2}$), and PMOS current sources $M_7$–$M_8$ with sources at $V_{DD}$ and gates tied to node X, the drain of $M_3$/$M_5$. In the left branch, $M_7$'s drain is the source of $M_5$.

Each branch carries 0.5 mA, all devices have $W/L = 200$, and $\gamma = 0$.

### Step 2 — PMOS gate–source voltage and the voltage at X

$$
\begin{aligned}
|V_{OD}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.1302}\ \mathrm{V} = 0.361\ \mathrm{V},\\
|V_{GS}| &= 0.8 + 0.361 = 1.161\ \mathrm{V}\quad(\text{same for } M_5\text{–}M_8).
\end{aligned}
$$

$M_7$'s gate is at X and its source at $V_{DD}$, so

$$V_X = V_{DD} - |V_{GS7}| = 3 - 1.161 = 1.839\ \mathrm{V}.$$

### Step 3 — Source voltage of $M_5$ (drain of $M_7$)

$M_5$'s gate is at $V_{b2}$ and it carries 0.5 mA, so its source sits one $|V_{GS5}|$ above its gate:

$$V_{S5} = V_{D7} = V_{b2} + |V_{GS5}| = V_{b2} + 1.161\ \mathrm{V}.$$

### Step 4 — Upper bound: $M_7$ must stay saturated

A PMOS is saturated when $|V_{DS}| \ge |V_{OD}|$. For $M_7$ (source at $V_{DD}$, drain at $V_{S5}$):

$$
\begin{aligned}
V_{DD} - (V_{b2} + 1.161) &\ge 0.361\\
V_{b2} &\le 3 - 0.361 - 1.161 = 1.478\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — Lower bound: $M_5$ must stay saturated

A PMOS is saturated when its drain is no higher than one threshold above its gate, $V_D \le V_G + |V_{TH}|$. For $M_5$ (gate at $V_{b2}$, drain at X):

$$
\begin{aligned}
V_X &\le V_{b2} + |V_{THP}|\\
V_{b2} &\ge V_X - |V_{THP}| = 1.839 - 0.8 = 1.039\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — The right-hand side and the window

$M_8$ has the same gate voltage (X) and current as $M_7$, and $M_6$ the same gate ($V_{b2}$) as $M_5$, so $M_8$ gives the same upper bound. $M_6$ additionally needs $V_{out} \le V_{b2} + 0.8$ V, which depends on the output level; for output levels up to about $V_X$ it is no stricter than the condition on $M_5$.

$$1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V}.$$

The window width is

$$1.478 - 1.039 = 0.44\ \mathrm{V} = |V_{THP}| - |V_{OD}|,$$

because the upper bound is $V_{DD} - |V_{OD}| - |V_{GS}| = V_{DD} - |V_{TH}| - 2|V_{OD}|$ and the lower bound is $V_{DD} - |V_{GS}| - |V_{TH}| = V_{DD} - 2|V_{TH}| - |V_{OD}|$. The low-voltage cascode works only because $|V_{TH}|$ exceeds $|V_{OD}|$.

### Result

$$V_X - |V_{THP}| \le V_{b2} \le V_{DD} - |V_{OD7}| - |V_{GS5}|\ \Longrightarrow\ 1.04\ \mathrm{V} \lesssim V_{b2} \lesssim 1.48\ \mathrm{V},$$

a window of $|V_{THP}| - |V_{OD}| \approx 0.44$ V. The lower bound keeps $M_5$ saturated (its drain X is at 1.84 V), the upper bound keeps $M_7$ saturated.

**Common mistake.** Giving a single "correct" value of $V_{b2}$. Any value within the window keeps all devices saturated; $V_{b2}$ only shifts the voltage at the $M_7$/$M_5$ junction.

**Common mistake.** Deriving the bounds as for a standard cascode mirror with two diode-connected devices. Here X drives the gate of $M_7$ directly, so $V_X = V_{DD} - |V_{GS7}| = 1.84$ V, and $M_5$ is biased by $V_{b2}$ rather than diode-connected.

**Common mistake.** Reversing the bounds. Raising $V_{b2}$ raises $M_5$'s source and threatens $M_7$ (upper bound); lowering $V_{b2}$ lowers $M_5$'s gate below its drain by more than a threshold and threatens $M_5$ (lower bound).
