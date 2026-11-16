# Detailed solution - R527

**Approach.** The 25-µA source forces its current through $M_{13}$–$M_{14}$ into $M_{12}$, which pins their joined drains at $V_{GS12}$. Write the terminal voltages of $M_{13}$ as functions of the input common-mode level $V_{CM}$ and apply the saturation condition. Then follow $V_{DS12}$ and $V_{DS11}$ once $M_{13}$–$M_{14}$ enter triode, and use channel-length modulation to decide how the mirror ratio moves.

### Step 1 — How the bias loop sets $M_{12}$'s current and the gate voltage

Call N the node of the 25-µA source, the drains of $M_{13}$–$M_{14}$ and the gates of $M_{12}$ and $M_{11}$, and S the node of the sources of $M_{13}$–$M_{14}$ and the drain of $M_{12}$. The gates draw no current, so

$$I_{D12} = I_{D13} + I_{D14} = 25\ \mu\mathrm{A},$$

and the loop sets $V_N$ so that $M_{12}$ carries exactly this current:

$$V_N = V_{GS12} \approx 300\ \mathrm{mV}.$$

$M_{11}$ shares this gate voltage and its grounded source, so it mirrors $M_{12}$:

$$\frac{W_{11}}{W_{12}} = \frac{600\ \mu\mathrm{m}}{8\ \mu\mathrm{m}} = 75,\qquad I_{D11} \approx 75\times25\ \mu\mathrm{A} = 1.875\ \mathrm{mA} \approx 1.9\ \mathrm{mA}.$$

### Step 2 — Why $M_{13}$–$M_{14}$ make the mirror accurate

$$
\begin{aligned}
M_{13},M_{14}:&\quad \frac{12.5\ \mu\mathrm{A}}{4\ \mu\mathrm{m}} = 3.1\ \mu\mathrm{A}/\mu\mathrm{m}, &
M_1,M_2:&\quad \frac{0.95\ \mathrm{mA}}{300\ \mu\mathrm{m}} = 3.2\ \mu\mathrm{A}/\mu\mathrm{m},\\
M_{12}:&\quad \frac{25\ \mu\mathrm{A}}{8\ \mu\mathrm{m}} = 3.1\ \mu\mathrm{A}/\mu\mathrm{m}, &
M_{11}:&\quad \frac{1.9\ \mathrm{mA}}{600\ \mu\mathrm{m}} = 3.2\ \mu\mathrm{A}/\mu\mathrm{m}.
\end{aligned}
$$

Equal density (same $L$) means equal $V_{GS}$, so with the same gate voltages $M_{13}$–$M_{14}$ have their sources where $M_1$–$M_2$ have theirs:

$$V_S = V_{CM} - V_{GS13} = V_{CM} - V_{GS1} = V_{DS11}\quad\Longrightarrow\quad V_{DS12} = V_{DS11}.$$

With identical $V_{GS}$ **and** $V_{DS}$, $I_{D11}/I_{D12} = 75$ exactly, despite the strong channel-length modulation of 40-nm devices. At the nominal $V_{CM} = 400$ mV:

$$V_{DS11} = V_{DS12} = 400\ \mathrm{mV} - 300\ \mathrm{mV} = 100\ \mathrm{mV}.$$

This works only while $M_{13}$–$M_{14}$ are saturated, like $M_1$–$M_2$.

### Step 3 — Terminal voltages of $M_{13}$ versus $V_{CM}$

The gate is at $V_{CM}$, the source at $V_{CM} - 300$ mV, and the drain at $V_N = V_{GS12} \approx 300$ mV, independent of $V_{CM}$:

$$V_{DS13} = V_{D13} - V_{S13} = 300\ \mathrm{mV} - (V_{CM} - 300\ \mathrm{mV}) = 600\ \mathrm{mV} - V_{CM}.$$

| $V_{CM}$ | $V_{S13} = V_{DS12}$ | $V_{DS13}$ | $M_{13}$ |
|---|---|---|---|
| 400 mV | 100 mV | 200 mV | saturated |
| 450 mV | 150 mV | 150 mV | saturated |
| 500 mV | 200 mV | 100 mV | edge of saturation |

### Step 4 — Maximum input common-mode level

$M_{13}$ (and $M_{14}$) need $V_{DS} \ge V_{GS} - V_{TH} = 300 - 200 = 100$ mV:

$$600\ \mathrm{mV} - V_{CM} \ge 100\ \mathrm{mV}\quad\Longrightarrow\quad V_{CM} \le 500\ \mathrm{mV}.$$

Equivalently, $V_{D13} \ge V_{G13} - V_{TH13}$ gives

$$V_{GS12} \ge V_{CM} - V_{TH13}\quad\Longrightarrow\quad V_{CM,max} = V_{GS12} + V_{TH13} \approx 300 + 200 = 500\ \mathrm{mV}.$$

So the input common-mode level can rise to about **0.5 V**, only about 100 mV above the nominal 400 mV. (With the source of $M_{13}$ about 0.2 V above its grounded bulk, body effect raises $V_{TH13}$ by a few tens of millivolts, which moves this limit slightly *up*; the conclusion is unchanged.)

### Step 5 — Above 0.5 V: $V_{DS12}$ stops tracking $V_{DS11}$

Beyond the limit, $M_{13}$–$M_{14}$ are in triode but must still pass 25 µA. With the current fixed and $V_N$ nearly constant,

$$\Delta I = g_{m13}\,(\Delta V_{CM} - \Delta V_S) + g_{ds13}\,(0 - \Delta V_S) = 0
\quad\Longrightarrow\quad
\frac{\Delta V_S}{\Delta V_{CM}} = \frac{g_{m13}}{g_{m13} + g_{ds13}} ,$$

with $g_{m13}$ and $g_{ds13} = 1/r_{O13}$ those of $M_{13}\parallel M_{14}$. In saturation $g_{ds} \ll g_m$ and the source follows $V_{CM}$; in triode ($g_m = kV_{DS}$, $g_{ds} = k(V_{GS} - V_{TH} - V_{DS})$) the ratio is $V_{DS13}/(V_{GS13} - V_{TH})$, which falls quickly below 1. Therefore:
- $V_{DS12} = V_S$ rises **more slowly** than $V_{CM}$ and creeps toward $V_N \approx 300$ mV;
- $V_{DS11} = V_{CM} - V_{GS1}$ keeps rising one for one (the input pair stays saturated).

**Illustration** (square law, $V_{TH} = 0.2$ V, $V_N = 0.3$ V, $M_{13}\parallel M_{14}$ with $k = 2\times25\ \mu\mathrm{A}/(0.1\ \mathrm{V})^2 = 5\ \mathrm{mA/V^2}$; solve $k[(V_{CM} - V_S - 0.2)(0.3 - V_S) - \tfrac12(0.3 - V_S)^2] = 25\ \mu\mathrm{A}$ for $V_S$):

| $V_{CM}$ | $V_{DS12}$ | $V_{DS11}$ | $V_{DS11} - V_{DS12}$ |
|---|---|---|---|
| 0.50 V | 0.200 V | 0.200 V | 0 |
| 0.55 V | 0.238 V | 0.250 V | 12 mV |
| 0.60 V | 0.259 V | 0.300 V | 41 mV |
| 0.70 V | 0.276 V | 0.400 V | 124 mV |

### Step 6 — Does $I_{D11}/I_{D12}$ increase or decrease?

$M_{11}$ and $M_{12}$ still share the same $V_{GS}$, so

$$\frac{I_{D11}}{I_{D12}} = \frac{W_{11}}{W_{12}}\cdot\frac{1 + \lambda V_{DS11}}{1 + \lambda V_{DS12}} = 75\,\frac{1 + \lambda V_{DS11}}{1 + \lambda V_{DS12}} .$$

Beyond 0.5 V, $V_{DS11} > V_{DS12}$, so **the ratio increases** above 75. $I_{D12}$ is pinned at 25 µA by the loop, so it is the tail current $I_{D11}$ that grows. (A small drop of $V_N$ due to $M_{12}$'s own channel-length modulation scales both currents alike.)

Minimum-length 40-nm devices have $\lambda$ of order 2–5 V⁻¹. With $\lambda = 2.5\ \mathrm{V^{-1}}$ and the numbers above:

$$V_{CM} = 0.6\ \mathrm{V}:\ \frac{1 + 2.5\times0.300}{1 + 2.5\times0.259} = \frac{1.75}{1.647} = 1.06;\qquad
V_{CM} = 0.7\ \mathrm{V}:\ \frac{1 + 2.5\times0.400}{1 + 2.5\times0.276} = \frac{2.00}{1.69} = 1.18 ,$$

i.e. the tail current would rise by about 6 % and 18 %, respectively.

### Result

- $M_{13}$–$M_{14}$ have their drains at $V_{GS12} \approx 300$ mV and their sources at $V_{CM} - 300$ mV, so $V_{DS13} = 600\ \mathrm{mV} - V_{CM}$. They stay saturated for
$$V_{CM} \le V_{GS12} + V_{TH13} \approx 300 + 200 = 500\ \mathrm{mV},$$
i.e. the input common-mode level can rise to about **0.5 V**, about 100 mV above nominal.
- Beyond this point **$I_{D11}/I_{D12}$ increases**. $M_{13}$–$M_{14}$ enter triode and need a larger $V_{GS}$ to carry 25 µA, so $V_{DS12}$ rises more slowly than $V_{CM}$ (slope $g_m/(g_m + g_{ds}) < 1$), while $V_{DS11} = V_{CM} - V_{GS1}$ keeps rising one for one. With $V_{DS11} > V_{DS12}$ and the strong channel-length modulation of 40-nm devices, $I_{D11}$ rises above $75\times25\ \mu\mathrm{A}$ while $I_{D12}$ stays at 25 µA.

**Common mistake.** Placing the drains of $M_{13}$–$M_{14}$ at $V_{DD}$ (or at the drain of $M_{11}$). They sit at node N, only $V_{GS12} \approx 300$ mV, and that low drain voltage is what limits the common-mode range.

**Common mistake.** Deriving the limit from $M_{11}$ or $M_{12}$, which both get *more* $V_{DS}$ as $V_{CM}$ rises. The device that runs out of headroom is $M_{13}$/$M_{14}$, whose source rises while its drain stays fixed.

**Common mistake.** Answering that the ratio decreases. Once the replica stops tracking, the tail device $M_{11}$ sees the larger $V_{DS}$ and, through channel-length modulation, conducts relatively more.
