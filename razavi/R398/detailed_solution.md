# Detailed solution - R398

**Approach.** Identify the two stages and the sign of the loop *before* using feedback formulas. Here $M_1$ is a common-gate stage from N to the output and $M_2$ a source follower from the output back to N. Both are non-inverting, so the loop is **positive** feedback. We compute the loop gain (infinite, of the wrong sign), then the formal small-signal values of $Z_{in}$, gain and $Z_{out}$ by KCL, and finally show that the negative output resistance makes the bias point unstable: the circuit latches instead of amplifying.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- $V_{in}$ drives node N through $R_S$; $Z_{in}$ is the impedance looking into N (to the right of $R_S$).
- Node N connects to the source of $M_1$, the source of $M_2$, and an ideal current source $I_1$ to ground.
- $M_1$ (NMOS): gate at the fixed bias $V_{b2}$, source at N, drain = $V_{out}$: a **common-gate** device.
- $M_2$ (NMOS): drain at $V_{DD}$, gate at $V_{out}$, source at N: a **source follower** from the output to N.
- The output is loaded only by the ideal current source $I_1$ from $V_{DD}$.

**Small-signal model in words.** Nodes: in, N and out.

- $R_S$ between in and N.
- $M_1$: $v_{gs1} = -v_N$; it carries $-g_{m1}v_N$ from out to N, i.e. a current $g_{m1}v_N$ flows from N up into the output node.
- $M_2$: it carries $g_{m2}(v_{out} - v_N)$ from $V_{DD}$ (AC ground) into N.
- Both current sources are open; no $r_O$ ($\lambda = 0$), no body effect ($\gamma = 0$); gates draw no current.
- For the stability discussion, $C_{out}$ denotes the (unavoidable) capacitance at the output.

Here $g_{m1}$ and $g_{m2}$ are the transconductances.

<!-- diagram: diagram-01.cir -->

### Step 2 — The sign of the loop: positive feedback

Follow a disturbance around the loop:

- $v_N\uparrow$ → $V_{GS1}$ falls → $M_1$ pulls *less* current from the output → the current source $I_1$ charges the output → $v_{out}\uparrow$ (common gate: non-inverting);
- $v_{out}\uparrow$ → the follower $M_2$ raises its source → $v_N\uparrow$ (source follower: non-inverting).

The disturbance **reinforces itself**. Unlike the related circuits in which the return path inverts, this loop is positive feedback.

**Loop gain.** Imagine a resistance $R_L$ at the output (to be made infinite), break the loop at the gate of $M_2$ (exact, since a gate draws no current) and apply $v_t$ there, with $V_{in} = 0$:

- KCL at N: $g_{m2}(v_t - v_N) = \dfrac{v_N}{R_S} + g_{m1}v_N$, so $v_N = \dfrac{g_{m2}v_t}{g_{m1} + g_{m2} + 1/R_S}$;
- $M_1$ delivers $g_{m1}v_N$ into the output: $v_{out} = g_{m1}R_Lv_N$.

$$\frac{v_{out}}{v_t} = +\frac{g_{m1}g_{m2}R_L}{g_{m1} + g_{m2} + 1/R_S}, \qquad T = -\frac{v_{out}}{v_t} = -\frac{g_{m1}g_{m2}R_L}{g_{m1} + g_{m2} + 1/R_S}.$$

The returned signal has the *same* sign as the test signal ($T < 0$), and with an ideal current source ($R_L \to \infty$) its magnitude is infinite. An infinite positive loop gain means the circuit is regenerative.

### Step 3 — Formal input impedance and gain

The usual small-signal algebra still produces "answers"; we compute them and then interpret them.

**KCL at the output** (no test source there): only $M_1$ carries small-signal current, so

$$g_{m1}v_N = 0 \quad\Longrightarrow\quad v_N = 0 .$$

**Input impedance.** Injecting a test current at N does not change this, so formally $Z_{in} = 0$.

**Gain.** With $v_N = 0$, KCL at N:

$$
\begin{aligned}
\frac{V_{in}}{R_S} + g_{m2}(V_{out} - 0) &= 0\\
\frac{V_{out}}{V_{in}} &= -\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

These values describe an equilibrium, but (Step 5) not a stable one.

### Step 4 — Formal output impedance: a negative resistance

Set $V_{in} = 0$, apply $v_X$ at the output and let it supply $I_X$.

**KCL at N:**

$$
\begin{aligned}
-\frac{v_N}{R_S} + g_{m2}(v_X - v_N) - g_{m1}v_N &= 0\\
v_N &= \frac{g_{m2}v_X}{g_{m1} + g_{m2} + 1/R_S}.
\end{aligned}
$$

**KCL at the output.** The test current flows down through $M_1$, whose drain-to-source current is $-g_{m1}v_N$:

$$I_X = -g_{m1}v_N = -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2} + 1/R_S}\,v_X .$$

$$Z_{out} = \frac{v_X}{I_X} = -\frac{g_{m1} + g_{m2} + 1/R_S}{g_{m1}g_{m2}} = -\left(\frac{1}{g_{m1}} + \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}\right).$$

A **negative** resistance: raising the output voltage makes the circuit *push* current out of the output node instead of drawing it in. This is the signature of positive feedback. (The feedback formula agrees: $R_L/(1 + T) \to -(g_{m1} + g_{m2} + 1/R_S)/(g_{m1}g_{m2})$ as $R_L \to \infty$.)

### Step 5 — Stability: the circuit latches

Include the capacitance $C_{out}$ at the output, with $V_{in} = 0$. Node N has no capacitance, so it follows instantly: $v_N = g_{m2}v_{out}/(g_{m1} + g_{m2} + 1/R_S)$. KCL at the output, where $M_1$ delivers $g_{m1}v_N$ into $C_{out}$:

$$C_{out}\frac{dv_{out}}{dt} = g_{m1}v_N = \frac{g_{m1}g_{m2}}{g_{m1} + g_{m2} + 1/R_S}\,v_{out} = \frac{v_{out}}{|Z_{out}|}.$$

The solution is $v_{out}(t) = v_{out}(0)\,e^{t/\tau}$ with $\tau = C_{out}|Z_{out}|$: a **right-half-plane pole** at $s = +1/(C_{out}|Z_{out}|)$. Any small disturbance grows exponentially until a device leaves saturation (for example $M_1$ turns off, or the output hits a rail). The circuit is a latch, not a linear amplifier, so the formal $Z_{in}$, gain and $Z_{out}$ of Steps 3–4 describe an equilibrium that cannot be maintained.

**When would it be stable?** If the output were loaded by a positive resistance $R_L$ smaller than $|Z_{out}|$, the net output conductance $1/R_L - 1/|Z_{out}|$ would be positive, which is equivalent to $|T| < 1$. With the ideal current-source load ($R_L \to \infty$) this is impossible.

### Result

The loop is **positive feedback**: $M_1$ (common gate, N → $V_{out}$) and $M_2$ (source follower, $V_{out}$ → N) are both non-inverting, and with $\lambda = 0$ and an ideal $I_1$ the loop gain is infinite. The circuit is regenerative: its equilibrium is unstable (right-half-plane pole with any output capacitance) and it latches. The formal small-signal results are

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}, \qquad Z_{out} = -\left(\frac{1}{g_{m1}} + \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}\right),$$

the negative output resistance being the signature of positive feedback.

**Common mistake.** Applying the negative-feedback recipe without checking the loop polarity, and reporting a positive, finite $Z_{out}$ such as $(1 + g_{m2}R_S)/(g_{m1}g_{m2}R_S)$ for a "stable amplifier". Both stages are non-inverting, so the loop polarity must be checked first; here it is positive.

**Common mistake.** Misreading the transistors, e.g. taking $M_2$ as a PMOS common-source device (as in a similar circuit where the return path inverts). Here $M_2$ is an NMOS with its drain at $V_{DD}$, gate at the output and source at N: a follower, whose gain is positive.

**Common mistake.** Trusting the formal values as if they described a working amplifier. Small-signal algebra always yields *an* equilibrium; whether it is stable must be checked separately, here through the sign of $Z_{out}$ or of the pole at the output.
