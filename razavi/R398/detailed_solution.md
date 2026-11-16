# Detailed solution - R398

**Approach.** Check the sign of the loop *before* using feedback formulas. $M_1$ is a common-gate stage from node N to the output and $M_2$ a source follower from the output back to N; both are non-inverting, so the loop is **positive** feedback. Compute the loop gain (infinite, of the wrong sign), then the formal small-signal $Z_{in}$, gain and $Z_{out}$ by KCL, and show that the negative output resistance makes the bias point unstable: the circuit latches instead of amplifying.

### Step 1 — Small-signal model

Call the node to the right of $R_S$ (sources of $M_1$ and $M_2$) N. Then:

- $R_S$ between in and N;
- $M_1$: $v_{gs1} = -v_N$, so a current $g_{m1}v_N$ flows from N up into the output;
- $M_2$: $g_{m2}(v_{out} - v_N)$ from $V_{DD}$ (ac ground) into N;
- both current sources are open; no $r_O$, no body effect, no gate currents;
- $C_{out}$, used for the stability discussion, is the unavoidable capacitance at the output.

<!-- diagram: diagram-01.cir -->

### Step 2 — The sign of the loop: positive feedback

- $v_N\uparrow$ → $M_1$ pulls *less* current from the output → $I_1$ charges it → $v_{out}\uparrow$ (common gate: non-inverting);
- $v_{out}\uparrow$ → the follower $M_2$ raises its source → $v_N\uparrow$ (non-inverting).

The disturbance **reinforces itself**, unlike related circuits whose return path inverts.

**Loop gain.** With a resistance $R_L$ at the output (to be made infinite), break the loop at the gate of $M_2$ (exact) and apply $v_t$, with $V_{in} = 0$. KCL at N, $g_{m2}(v_t - v_N) = v_N/R_S + g_{m1}v_N$, gives

$$v_N = \frac{g_{m2}v_t}{g_{m1} + g_{m2} + 1/R_S}, \qquad v_{out} = g_{m1}R_Lv_N ,$$

$$\frac{v_{out}}{v_t} = +\frac{g_{m1}g_{m2}R_L}{g_{m1} + g_{m2} + 1/R_S}, \qquad T = -\frac{v_{out}}{v_t} = -\frac{g_{m1}g_{m2}R_L}{g_{m1} + g_{m2} + 1/R_S}.$$

The returned signal has the *same* sign as the test signal ($T < 0$), and for $R_L \to \infty$ its magnitude is infinite: the circuit is regenerative.

### Step 3 — Formal input impedance and gain

KCL at the output (no test source there) leaves only $M_1$'s current:

$$g_{m1}v_N = 0 \quad\Longrightarrow\quad v_N = 0 ,$$

which a test current at N does not change, so formally $Z_{in} = 0$. With $v_N = 0$, KCL at N gives

$$
\begin{aligned}
\frac{V_{in}}{R_S} + g_{m2}(V_{out} - 0) &= 0\\
\frac{V_{out}}{V_{in}} &= -\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

These values describe an equilibrium, but (Step 5) not a stable one.

### Step 4 — Formal output impedance: a negative resistance

With $V_{in} = 0$ and $v_X$ at the output, KCL at N:

$$
\begin{aligned}
-\frac{v_N}{R_S} + g_{m2}(v_X - v_N) - g_{m1}v_N &= 0\\
v_N &= \frac{g_{m2}v_X}{g_{m1} + g_{m2} + 1/R_S}.
\end{aligned}
$$

The test current flows down through $M_1$, whose drain-to-source current is $-g_{m1}v_N$:

$$I_X = -g_{m1}v_N = -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2} + 1/R_S}\,v_X ,$$

$$Z_{out} = \frac{v_X}{I_X} = -\frac{g_{m1} + g_{m2} + 1/R_S}{g_{m1}g_{m2}} = -\left(\frac{1}{g_{m1}} + \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}\right).$$

A **negative** resistance: raising the output makes the circuit *push* current out of it, the signature of positive feedback. (The feedback formula agrees: $R_L/(1 + T) \to -(g_{m1} + g_{m2} + 1/R_S)/(g_{m1}g_{m2})$ as $R_L \to \infty$.)

### Step 5 — Stability: the circuit latches

With $C_{out}$ at the output and $V_{in} = 0$, node N (no capacitance) follows instantly, $v_N = g_{m2}v_{out}/(g_{m1} + g_{m2} + 1/R_S)$, and $M_1$ delivers $g_{m1}v_N$ into $C_{out}$:

$$C_{out}\frac{dv_{out}}{dt} = g_{m1}v_N = \frac{g_{m1}g_{m2}}{g_{m1} + g_{m2} + 1/R_S}\,v_{out} = \frac{v_{out}}{|Z_{out}|}.$$

So $v_{out}(t) = v_{out}(0)\,e^{t/\tau}$ with $\tau = C_{out}|Z_{out}|$: a **right-half-plane pole** at $s = +1/(C_{out}|Z_{out}|)$. Any disturbance grows until a device leaves saturation ($M_1$ turns off, or the output hits a rail). The circuit is a latch, and the formal values of Steps 3–4 describe an equilibrium that cannot be maintained.

It would be stable only with a positive load resistance $R_L < |Z_{out}|$, making the net output conductance $1/R_L - 1/|Z_{out}|$ positive (equivalently $|T| < 1$); with the ideal current-source load this is impossible.

### Result

The loop is **positive feedback**: $M_1$ (common gate, N → $V_{out}$) and $M_2$ (source follower, $V_{out}$ → N) are both non-inverting, and with $\lambda = 0$ and an ideal $I_1$ the loop gain is infinite. The circuit is regenerative: its equilibrium is unstable (right-half-plane pole with any output capacitance) and it latches. The formal small-signal results are

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}, \qquad Z_{out} = -\left(\frac{1}{g_{m1}} + \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}\right),$$

the negative output resistance being the signature of positive feedback.

**Common mistake.** Applying the negative-feedback recipe without checking the loop polarity and reporting a positive, finite $Z_{out}$ such as $(1 + g_{m2}R_S)/(g_{m1}g_{m2}R_S)$ for a "stable amplifier". Both stages are non-inverting, so the loop is positive.

**Common mistake.** Taking $M_2$ as a PMOS common-source device (as in a similar circuit whose return path inverts). Here it is an NMOS follower (drain at $V_{DD}$, gate at the output, source at N), with positive gain.

**Common mistake.** Trusting the formal values as a working amplifier. Small-signal algebra always yields *an* equilibrium; its stability must be checked separately, here through the sign of $Z_{out}$ or of the output pole.
