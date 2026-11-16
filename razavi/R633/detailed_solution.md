# Detailed solution - R633

**Approach.** At low frequencies the capacitors are open circuits and each inductor is a short circuit except for its series resistance $R_S$, so each drain sees only $R_S$ (to $V_{DD}$). The two common-source stages form a DC-coupled loop with two inversions, i.e. **positive** feedback, with loop gain $g_{m1}g_{m2}R_S^2$. Keeping that loop gain below unity prevents latch-up and gives the bound on $R_S$.

### Step 1 — The circuit

Reading the figure:

- $M_1$ and $M_2$ are NMOS transistors with grounded sources.
- The drain of $M_1$ (node X) and the drain of $M_2$ (node Y) each connect to $V_{DD}$ through a tank made of $L_P$, $R_P$ and $C_P$ in parallel.
- X drives the gate of $M_2$, and Y (also the output) drives the gate of $M_1$: the two stages are **cross-coupled**.

Each inductor has a series resistance $R_S$, which models the loss of its winding.

### Step 2 — Load impedance at low frequency

At DC and low frequencies:

- $C_P$ has impedance $1/(j\omega C_P) \to \infty$: an **open circuit**.
- $L_P$ has impedance $j\omega L_P \to 0$, so the inductor branch reduces to its series resistance $R_S$.
- $R_P$, if it is a separate physical resistor, is in parallel.

The low-frequency load at each drain is therefore

$$Z(0) = R_S \parallel R_P \approx R_S,$$

because a practical inductor has $R_S \ll R_P$. (If $R_P$ is only the parallel-equivalent model of the inductor loss at resonance, it does not exist at DC, and the load is exactly $R_S$.)

### Step 3 — Low-frequency loop gain

Break the loop at the gate of $M_1$ (it draws no current) and apply a test voltage $v_t$. Small-signal model ($\lambda = 0$): each transistor is a controlled current source $g_mv_{gs}$ from its drain to ground, and each drain node has $R_S$ (and $R_P$) to AC ground.

<!-- diagram: diagram-01.cir -->

**First stage ($M_1$).** KCL at X: the current $g_{m1}v_t$ drawn by $M_1$ is supplied through $Z(0)$, so

$$v_X = -g_{m1}Z(0)\,v_t .$$

**Second stage ($M_2$).** Its gate is at X, so by the same reasoning

$$v_Y = -g_{m2}Z(0)\,v_X = (-g_{m2}Z(0))(-g_{m1}Z(0))\,v_t = g_{m1}g_{m2}Z(0)^2\,v_t .$$

$v_Y$ is what returns to the gate of $M_1$, so the low-frequency loop gain is

$$A_{loop}(0) = \frac{v_Y}{v_t} = +g_{m1}g_{m2}Z(0)^2 \approx g_{m1}g_{m2}R_S^2 .$$

It is **positive**: two inversions in a row return the signal with its original sign. This is positive feedback at DC.

### Step 4 — Why the DC loop gain must be below unity

With positive feedback, a small disturbance $v$ at the gate of $M_1$ comes back as $A_{loop}(0)\,v$.

- If $A_{loop}(0) < 1$, the returned disturbance is smaller than the original one and dies out. The symmetric operating point ($V_X = V_Y$) is stable at DC, and the circuit can oscillate at the tank's resonance frequency, where the feedback is meant to act.
- If $A_{loop}(0) > 1$, the disturbance grows without any oscillation: the closed loop has a real right-half-plane pole. $V_X$ and $V_Y$ run away in opposite directions until one transistor is fully on and the other off. The circuit **latches** in this state like a static memory cell, and it cannot oscillate.

### Step 5 — The bound on $R_S$

Require $A_{loop}(0) < 1$:

$$g_{m1}g_{m2}R_S^2 < 1 .$$

Divide by $g_{m1}g_{m2}$ and take the square root (all quantities positive):

$$R_S < \frac{1}{\sqrt{g_{m1}g_{m2}}} .$$

For identical transistors, $g_{m1} = g_{m2} = g_m$:

$$R_S < \frac{1}{g_m} .$$

(Strictly, $(R_S \parallel R_P) < 1/\sqrt{g_{m1}g_{m2}}$, which reduces to the same bound since $R_S \ll R_P$.)

### Step 6 — Compatibility with oscillation

Oscillation requires the loop gain **at resonance** to reach 1. There $L_P$ and $C_P$ cancel and each drain sees its full tank resistance. Including the inductor loss, that resistance is $R_P \parallel R_{p,L}$, where $R_{p,L} \approx Q_L^2R_S$ is the parallel equivalent of $R_S$ at resonance and $Q_L = \omega_0L_P/R_S$ is the inductor's quality factor. Calling this total resonant resistance $R_{tank}$, the start-up condition is

$$g_{m1}g_{m2}R_{tank}^2 \ge 1, \quad\text{i.e.}\quad g_m \ge \frac{1}{R_{tank}}\ \ (\text{identical devices}).$$

Together with Step 5:

$$\frac{1}{R_{tank}} \le g_m < \frac{1}{R_S} .$$

The window is wide because the tank resistance at resonance is much larger than the series resistance. For example, with $Q_L = 10$, $R_{tank}$ can be up to about $Q_L^2R_S = 100R_S$, so any $g_m$ between about $0.01/R_S$ and $1/R_S$ works. The circuit uses the large impedance at resonance to oscillate, while the small DC resistance keeps it from latching.

### Result

At low frequency the loads reduce to $R_S$ ($C_P$ open, $L_P$ shorted), and the two cross-coupled common-source stages form a positive-feedback loop with gain $g_{m1}g_{m2}R_S^2$. Avoiding latch-up requires this to be less than 1:

$$R_S < \frac{1}{\sqrt{g_{m1}g_{m2}}}\quad\left(= \frac{1}{g_m}\ \text{for}\ g_{m1} = g_{m2} = g_m\right).$$

Strictly, $(R_S \parallel R_P) < 1/\sqrt{g_{m1}g_{m2}}$, which is the same bound because $R_S \ll R_P$.

**Common mistake.** Using $R_P$ (or the tank impedance at resonance) as the DC load. At DC the inductor shorts the tank except for its series resistance, so the DC loop gain involves $R_S$, not $R_P$. Using $R_P$ would wrongly predict latch-up in every working LC oscillator, since oscillation itself requires $g_mR_P \ge 1$.

**Common mistake.** Reversing the inequality ($R_S > 1/g_m$). A *larger* series resistance increases the DC gain of each stage and makes latch-up *more* likely; the condition is an upper bound on $R_S$.

**Common mistake.** Writing the condition in terms of $Q$, $L_P$ or the oscillation frequency. Those quantities describe the behaviour at resonance; the latch-up condition concerns DC, where only $R_S$ and the transconductances matter.
