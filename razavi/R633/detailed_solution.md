# Detailed solution - R633

**Approach.** At low frequencies the capacitors are open and each inductor is a short except for its series resistance $R_S$, so each drain sees only $R_S$ (to $V_{DD}$). The two cross-coupled common-source stages form a dc-coupled loop with two inversions, i.e. **positive** feedback, with loop gain $g_{m1}g_{m2}R_S^2$. Keeping that loop gain below unity prevents latch-up and bounds $R_S$.

### Step 1 — Load impedance at low frequency

At dc $C_P$ is open and $L_P$ reduces to its series resistance $R_S$; $R_P$, if it is a separate physical resistor, is in parallel. So each drain sees

$$Z(0) = R_S \parallel R_P \approx R_S,$$

since a practical inductor has $R_S \ll R_P$. (If $R_P$ is only the parallel-equivalent model of the inductor loss at resonance, it does not exist at dc and the load is exactly $R_S$.)

### Step 2 — Low-frequency loop gain

Break the loop at the gate of $M_1$ (it draws no current) and apply a test voltage $v_t$. With $\lambda = 0$, each transistor is a current source $g_mv_{gs}$ from its drain to ground, and each drain has $R_S$ (and $R_P$) to ac ground.

<!-- diagram: diagram-01.cir -->

KCL at X and then at Y (the gate of $M_2$ is at X):

$$v_X = -g_{m1}Z(0)\,v_t, \qquad v_Y = -g_{m2}Z(0)\,v_X = (-g_{m2}Z(0))(-g_{m1}Z(0))\,v_t = g_{m1}g_{m2}Z(0)^2\,v_t .$$

$v_Y$ returns to the gate of $M_1$, so

$$A_{loop}(0) = \frac{v_Y}{v_t} = +g_{m1}g_{m2}Z(0)^2 \approx g_{m1}g_{m2}R_S^2 .$$

It is **positive**: two inversions return the signal with its original sign, so the feedback is positive at dc.

### Step 3 — Why the dc loop gain must be below unity

A disturbance $v$ at the gate of $M_1$ comes back as $A_{loop}(0)\,v$.

- If $A_{loop}(0) < 1$, it dies out: the symmetric point ($V_X = V_Y$) is stable at dc, and the circuit can oscillate at the tank's resonance frequency.
- If $A_{loop}(0) > 1$, it grows without oscillating (a real right-half-plane pole): $V_X$ and $V_Y$ run apart until one transistor is fully on and the other off. The circuit **latches** like a static memory cell and cannot oscillate.

### Step 4 — The bound on $R_S$

$$g_{m1}g_{m2}R_S^2 < 1 \quad\Longrightarrow\quad R_S < \frac{1}{\sqrt{g_{m1}g_{m2}}} .$$

For identical transistors, $g_{m1} = g_{m2} = g_m$:

$$R_S < \frac{1}{g_m} .$$

(Strictly, $(R_S \parallel R_P) < 1/\sqrt{g_{m1}g_{m2}}$, which gives the same bound since $R_S \ll R_P$.)

### Step 5 — Compatibility with oscillation

Oscillation requires the loop gain **at resonance** to reach 1. There $L_P$ and $C_P$ cancel and each drain sees $R_{tank} = R_P \parallel R_{p,L}$, where $R_{p,L} \approx Q_L^2R_S$ is the parallel equivalent of $R_S$ at resonance and $Q_L = \omega_0L_P/R_S$. The start-up condition is

$$g_{m1}g_{m2}R_{tank}^2 \ge 1, \quad\text{i.e.}\quad g_m \ge \frac{1}{R_{tank}}\ \ (\text{identical devices}),$$

so together with Step 4

$$\frac{1}{R_{tank}} \le g_m < \frac{1}{R_S} .$$

The window is wide because the tank resistance at resonance far exceeds $R_S$. For example, with $Q_L = 10$, $R_{tank}$ can be up to about $Q_L^2R_S = 100R_S$, so any $g_m$ between about $0.01/R_S$ and $1/R_S$ works.

### Result

At low frequency the loads reduce to $R_S$ ($C_P$ open, $L_P$ shorted), and the two cross-coupled common-source stages form a positive-feedback loop with gain $g_{m1}g_{m2}R_S^2$. Avoiding latch-up requires this to be less than 1:

$$R_S < \frac{1}{\sqrt{g_{m1}g_{m2}}}\quad\left(= \frac{1}{g_m}\ \text{for}\ g_{m1} = g_{m2} = g_m\right).$$

Strictly, $(R_S \parallel R_P) < 1/\sqrt{g_{m1}g_{m2}}$, which is the same bound because $R_S \ll R_P$.

**Common mistake.** Using $R_P$ (or the tank impedance at resonance) as the dc load. At dc the inductor shorts the tank except for $R_S$; using $R_P$ would predict latch-up in every working LC oscillator, since oscillation itself requires $g_mR_P \ge 1$.

**Common mistake.** Reversing the inequality ($R_S > 1/g_m$). A *larger* series resistance raises each stage's dc gain and makes latch-up *more* likely.

**Common mistake.** Writing the condition in terms of $Q$, $L_P$ or the oscillation frequency. Those describe resonance; latch-up is a dc condition involving only $R_S$ and the transconductances.
