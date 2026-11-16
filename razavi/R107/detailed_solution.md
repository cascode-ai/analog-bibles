# Detailed solution - R107

**Approach.** $R_1$ connects the common drain node to the common gate node, and gates draw no current, so $R_1$ carries no DC current and both gates sit at $V_X$. Both transistors are then diode-connected and saturated whenever they conduct. KCL at the drain node gives $I_X = I_{D1} - I_{D2}$, evaluated in the three ranges of $V_X$ set by 0.7 V and $V_{DD} - 0.8 = 2.2$ V.

### Step 1 — $R_1$ carries no current

The common gate node is connected only to $R_1$ and to the gates, which draw no DC current, so the current in $R_1$ is zero and

$$V_G = V_X .$$

Both devices are therefore **diode-connected**, $V_{GS1} = V_{DS1} = V_X$ and $V_{SG2} = V_{SD2} = 3 - V_X$, so each is **saturated whenever it is on**.

### Step 2 — Device currents and KCL

$$
\begin{aligned}
I_{D1} &= \tfrac12\beta_n(V_X - 0.7)^2 &&\text{for } V_X > 0.7\ \mathrm{V}\ (\text{else } 0),\\
I_{D2} &= \tfrac12\beta_p(3 - V_X - 0.8)^2 = \tfrac12\beta_p(2.2 - V_X)^2 &&\text{for } V_X < 2.2\ \mathrm{V}\ (\text{else } 0).
\end{aligned}
$$

$I_X$ and $M_2$'s drain current flow into the drain node, and $M_1$'s drain current flows out:

$$I_X = I_{D1} - I_{D2} .$$

### Step 3 — The three segments

**(a) $0 \le V_X \le 0.7$ V: only $M_2$ conducts.**

$$I_X = -\tfrac12\beta_p(2.2 - V_X)^2 ,$$

negative ($M_2$ pushes current into the test source), with

$$
\begin{aligned}
I_X(0) &= -\tfrac12\beta_p(2.2)^2 = -2.42\,\beta_p\ (\mathrm{V^2}),\\
I_X(0.7) &= -\tfrac12\beta_p(1.5)^2 = -1.125\,\beta_p\ (\mathrm{V^2}).
\end{aligned}
$$

**(b) $0.7 \le V_X \le 2.2$ V: both conduct (both saturated).**

$$I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2 .$$

**Zero crossing**, from equal currents and positive overdrives:

$$
\begin{aligned}
\sqrt{\beta_n}(V_X - 0.7) &= \sqrt{\beta_p}(2.2 - V_X)\\
V_X(\sqrt{\beta_n} + \sqrt{\beta_p}) &= 0.7\sqrt{\beta_n} + 2.2\sqrt{\beta_p}\\
V_{X0} &= \frac{0.7\sqrt{\beta_n} + 2.2\sqrt{\beta_p}}{\sqrt{\beta_n} + \sqrt{\beta_p}} ,
\end{aligned}
$$

the voltage the node settles at with the source removed (the switching threshold of an inverter with its input tied to its output). For $\beta_n = \beta_p = \beta$, $V_{X0} = (0.7 + 2.2)/2 = 1.45$ V, and the segment is a straight line:

$$
\begin{aligned}
I_X &= \tfrac12\beta\left[(V_X - 0.7)^2 - (2.2 - V_X)^2\right]\\
&= \tfrac12\beta\,(V_X - 0.7 - 2.2 + V_X)(V_X - 0.7 + 2.2 - V_X)\\
&= \tfrac12\beta\,(2V_X - 2.9)(1.5) = 1.5\,\beta\,(V_X - 1.45) .
\end{aligned}
$$

**(c) $2.2 \le V_X \le 3$ V: only $M_1$ conducts.**

$$I_X = \tfrac12\beta_n(V_X - 0.7)^2 ,$$

from $\tfrac12\beta_n(1.5)^2 = 1.125\,\beta_n$ at 2.2 V to $\tfrac12\beta_n(2.3)^2 = 2.645\,\beta_n$ at 3 V.

### Step 4 — Slope and smoothness

The slope is the sum of the conductances $1/g_m$ of the two diode-connected devices:

$$\frac{dI_X}{dV_X} = \beta_n(V_X - 0.7)\big|_{V_X > 0.7} + \beta_p(2.2 - V_X)\big|_{V_X < 2.2} = g_{m1} + g_{m2} > 0 .$$

At 0.7 V the newly conducting $M_1$ has $g_{m1} = 0$, and at 2.2 V the turning-off $M_2$ has $g_{m2} = 0$, so the slope is **continuous** at both transition points: no sharp corners, only changes of curvature (concave in (a), linear for equal $\beta$ in (b), convex in (c)). $I_X$ **increases monotonically** over the whole range.

### Step 5 — Numbers for $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$

| $V_X$ (V) | $I_{D1}$ (mA) | $I_{D2}$ (mA) | $I_X$ (mA) | Slope (mS) |
|---|---|---|---|---|
| 0 | 0 | 2.420 | −2.420 | 2.2 |
| 0.35 | 0 | 1.711 | −1.711 | 1.85 |
| 0.7 | 0 | 1.125 | −1.125 | 1.5 |
| 1.0 | 0.045 | 0.720 | −0.675 | 1.5 |
| 1.45 | 0.281 | 0.281 | 0 | 1.5 |
| 1.8 | 0.605 | 0.080 | 0.525 | 1.5 |
| 2.2 | 1.125 | 0 | 1.125 | 1.5 |
| 2.6 | 1.805 | 0 | 1.805 | 1.9 |
| 3.0 | 2.645 | 0 | 2.645 | 2.3 |

### Result

$R_1$ carries no DC current (it only feeds the gates), so both gates sit at $V_X$ and both transistors are diode-connected and saturated when on:

$$I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$$

over the range where each conducts.

- **$0 \le V_X \le 0.7$ V:** $M_1$ off; $M_2$ ($V_{SG} = V_{SD} = 3 - V_X$, saturated) supplies current into the source: $I_X = -\tfrac12\beta_p(2.2 - V_X)^2$, from $-2.42\beta_p$ at 0 V to $-1.125\beta_p$ at 0.7 V.
- **$0.7 \le V_X \le 2.2$ V:** both on and saturated, $I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$, rising. It crosses zero at $V_X = (0.7\sqrt{\beta_n} + 2.2\sqrt{\beta_p})/(\sqrt{\beta_n} + \sqrt{\beta_p})$ (1.45 V for $\beta_n = \beta_p$, where this segment is a straight line).
- **$2.2 \le V_X \le 3$ V:** $M_2$ off; $I_X = \tfrac12\beta_n(V_X - 0.7)^2$, from $1.125\beta_n$ to $2.645\beta_n$ at 3 V.
- **Transition points:** 0.7 V ($M_1$ turns on), 2.2 V ($M_2$ turns off), and the zero crossing.

**Common mistake.** Assuming a DC current through, or a voltage drop across, $R_1$. Gates draw no DC current, so $V_G = V_X$ exactly ($R_1$ matters only for signals, when gate capacitance draws current).

**Common mistake.** Putting the devices in triode. With gate and drain at the same voltage, $V_{DS} = V_{GS} > V_{GS} - V_{TH}$, so each is saturated whenever it conducts.

**Common mistake.** Drawing $I_X$ decreasing with $V_X$, or with the wrong sign at the ends. At low $V_X$ the PMOS pushes current *into* the test source (negative $I_X$); at high $V_X$ the NMOS draws current *from* it.
