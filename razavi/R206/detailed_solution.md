# Detailed solution - R206

**Approach.** In the differential half circuit ($\lambda = 0$), each output has a diode-connected PMOS ($M_5$, conductance $+g_{m5}$) and one device of the cross-coupled pair ($M_3$, gate at the *opposite* output), which contributes $-g_{m3}$. KCL gives $A_v = -g_{m1}/(g_{m5} - g_{m3})$. For the numerical case, $g_{m3}$ follows from $g_{m5}$ because at balance $M_3$ and $M_5$ have the **same** gate–source voltage.

### Step 1 — Half-circuit small-signal model

Call the left output (drains of $M_1$, $M_3$, $M_5$) X and the right output Y. With $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$, symmetry gives $v_Y = -v_X$ and the common source node P is a virtual ground. With $\lambda = 0$ the elements at X are:

- **$M_1$:** draws $g_{m1}v_d/2$ out of X.
- **$M_5$ (diode):** its current $g_{m5}v_{gs5} = g_{m5}v_X$ leaves X, a conductance $+g_{m5}$.
- **$M_3$ (cross-coupled):** gate at Y, so its current leaving X is $g_{m3}v_{gs3} = g_{m3}v_Y = -g_{m3}v_X$, a conductance $-g_{m3}$: when X rises, $M_3$ pushes *more* current into X.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at X and the general gain

$$g_{m1}\frac{v_d}{2} + g_{m5}v_X - g_{m3}v_X = 0 \quad\Longrightarrow\quad v_X = -\frac{g_{m1}}{g_{m5} - g_{m3}}\cdot\frac{v_d}{2}.$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -\frac{g_{m1}}{g_{m5} - g_{m3}} .$$

The cross-coupled pair cancels part of the diode conductance, so the net load conductance is small and the gain high; the circuit stays stable as long as $g_{m3} < g_{m5}$.

### Step 3 — Relating $g_{m3}$ to $g_{m5}$ when $W_{3,4} = 0.8W_{5,6}$

At the bias point $V_X = V_Y$. $M_5$ has its gate at X and $M_3$ at Y, both with source at $V_{DD}$, so

$$V_{SG3} = V_{DD} - V_Y = V_{DD} - V_X = V_{SG5}.$$

With the same overdrive $V_{ov} = V_{SG} - |V_{THP}|$ and equal channel lengths, the square law gives

$$\frac{I_3}{I_5} = \frac{\tfrac12\mu_pC_{ox}(W_3/L)V_{ov}^2}{\tfrac12\mu_pC_{ox}(W_5/L)V_{ov}^2} = \frac{W_3}{W_5} = 0.8 ,$$

and since $g_m = 2I_D/V_{ov}$ at equal overdrive,

$$\frac{g_{m3}}{g_{m5}} = \frac{2I_3/V_{ov}}{2I_5/V_{ov}} = \frac{I_3}{I_5} = 0.8 \quad\Longrightarrow\quad g_{m3} = 0.8\,g_{m5}.$$

**Gain:**

$$A_v = -\frac{g_{m1}}{g_{m5} - 0.8g_{m5}} = -\frac{g_{m1}}{0.2\,g_{m5}} = -5\,\frac{g_{m1}}{g_{m5}} .$$

### Step 4 — The same result in device parameters

KCL at X at the bias point gives $I_{D1} = I_5 + I_3 = I_5 + 0.8I_5 = 1.8I_5$, so $I_5 = I_{D1}/1.8$ and

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}(W/L)_1I_{D1}},\\
g_{m5} &= \sqrt{2\mu_pC_{ox}(W/L)_5\frac{I_{D1}}{1.8}},\\
\frac{g_{m1}}{g_{m5}} &= \sqrt{\frac{1.8\,\mu_n(W/L)_1}{\mu_p(W/L)_5}},\\
|A_v| &= 5\sqrt{1.8}\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_5}} \approx 6.7\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_5}} .
\end{aligned}
$$

Plain diode loads carrying all of $I_{D1}$ would give $|A_v| = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_5]}$, so the cross-coupled pair raises the gain by a factor of about 6.7 for the same device sizes.

*Numerical feel:* if $\mu_n(W/L)_1 = 3.5\,\mu_p(W/L)_5$, then $|A_v| = 6.7\sqrt{3.5} = 6.7\times1.87 \approx 12.5$.

### Result

$$A_v = -\frac{g_{m1}}{g_{m5} - g_{m3}}, \qquad\text{and for } W_{3,4} = 0.8W_{5,6}:\quad A_v = -5\,\frac{g_{m1}}{g_{m5}} \approx -6.7\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_5}} .$$

The left output sees the diode $M_5$ (conductance $g_{m5}$) and $M_3$, whose gate is driven by the right output ($-v_X$) and which therefore injects $g_{m3}v_X$: the net conductance is $g_{m5} - g_{m3}$. At balance $M_3$ and $M_5$ have the same $V_{SG}$, so $I_3/I_5 = W_3/W_5 = 0.8$ and $g_{m3} = 0.8g_{m5}$.

**Common mistake.** Using $g_m \propto \sqrt{W}$ to get $g_{m3} = \sqrt{0.8}\,g_{m5} = 0.89g_{m5}$, which gives about $9g_{m1}/g_{m5}$. That rule holds at equal *currents*; here the devices have equal *overdrives*, so $g_m$ scales directly with $W$.

**Common mistake.** Adding the conductances, $g_{m1}/(g_{m5} + g_{m3})$, as if $M_3$ were another diode. Its gate is at the opposite output, which moves by $-v_X$.

**Common mistake.** Ignoring the cross-coupled pair ($A_v = -g_{m1}/g_{m5}$), or declaring the circuit a latch. With $W_3 < W_5$ the net conductance $0.2g_{m5}$ is still positive, so the circuit is a stable high-gain amplifier.
