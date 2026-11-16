# Detailed solution - R512

**Approach.** Working with increments from the bias point, write the current through $C_F$ and the KCL at the output, eliminate $V_X$ to get a second-order differential equation for $V_{out}$, and solve it with the Laplace transform and partial fractions. Then examine the three terms and set the derivative to zero for the minimum.

### Step 1 — Small-signal model

For increments, $M_{out}$ is a current $g_mV_X$ from the output to ground ($r_O$ neglected), and the constant $I_1$ is an open circuit. All incremental voltages are zero at $t = 0^-$. The model has two nodes: X, with $I_{in}$ to ground and $C_F$ to the output, and the output, with $C_F$, $g_mV_X$ and $C_L$.

<!-- diagram: diagram-01.cir -->

### Step 2 — The two circuit equations

**KCL at X.** The gate draws no current, so all of $I_{in}$ flows through $C_F$ from the output to X:

$$C_F\,\frac{d(V_{out} - V_X)}{dt} = I_{in}. \tag{1}$$

**KCL at the output.** The currents leaving the output are $g_mV_X$, the current into $C_F$ (equal to $I_{in}$ by (1)) and the current into $C_L$:

$$g_mV_X + I_{in} + C_L\,\frac{dV_{out}}{dt} = 0. \tag{2}$$

### Step 3 — Eliminate $V_X$: the differential equation

From (2):

$$V_X = -\frac{1}{g_m}\left(I_{in} + C_L\frac{dV_{out}}{dt}\right), \qquad \frac{dV_X}{dt} = -\frac{1}{g_m}\left(\frac{dI_{in}}{dt} + C_L\frac{d^2V_{out}}{dt^2}\right).$$

Substituting $\dot V_X$ into (1), $C_F\dot V_{out} - C_F\dot V_X = I_{in}$:

$$C_F\frac{dV_{out}}{dt} + \frac{C_F}{g_m}\left(\frac{dI_{in}}{dt} + C_L\frac{d^2V_{out}}{dt^2}\right) = I_{in},$$

$$\boxed{\frac{C_FC_L}{g_m}\,\frac{d^2V_{out}}{dt^2} + C_F\,\frac{dV_{out}}{dt} = I_{in} - \frac{C_F}{g_m}\,\frac{dI_{in}}{dt}}$$

The derivative of the input produces a zero: part of the input current reaches the output directly through $C_F$.

### Step 4 — Laplace transform

With zero initial conditions, $I_{in}(s) = I_{SS}/s$ and the transform of $dI_{in}/dt$ is $s\cdot I_{SS}/s = I_{SS}$:

$$\frac{C_FC_L}{g_m}s^2V_{out}(s) + C_FsV_{out}(s) = \frac{I_{SS}}{s} - \frac{C_F}{g_m}I_{SS} = \frac{I_{SS}}{s}\left(1 - \frac{sC_F}{g_m}\right).$$

The left side is $C_Fs\left(1 + sC_L/g_m\right)V_{out}(s)$, so

$$V_{out}(s) = \frac{I_{SS}}{C_F}\cdot\frac{1 - s\,a}{s^2(1 + s\tau)},\qquad a = \frac{C_F}{g_m},\quad \tau = \frac{C_L}{g_m}.$$

$\tau$ is the time constant of $C_L$ driven by the transconductance $g_m$.

### Step 5 — Partial fractions

$$\frac{1 - sa}{s^2(1 + s\tau)} = \frac{A}{s^2} + \frac{B}{s} + \frac{C}{1 + s\tau},$$

with $A = 1$ (at $s = 0$ after multiplying by $s^2$),

$$C = \frac{1 + a/\tau}{1/\tau^2} = \tau^2 + a\tau = \tau(\tau + a)\quad (\text{at } s = -1/\tau),$$

$$B = \frac{d}{ds}\left[\frac{1 - sa}{1 + s\tau}\right]_{s=0} = \left[\frac{-a(1 + s\tau) - (1 - sa)\tau}{(1 + s\tau)^2}\right]_{s=0} = -(a + \tau).$$

So

$$V_{out}(s) = \frac{I_{SS}}{C_F}\left[\frac{1}{s^2} - \frac{a + \tau}{s} + \frac{\tau(\tau + a)}{1 + s\tau}\right].$$

### Step 6 — Back to the time domain

With $1/s^2 \to t$, $1/s \to 1$ and $1/(1 + s\tau) \to (1/\tau)e^{-t/\tau}$ for $t \ge 0$:

$$V_{out}(t) = \frac{I_{SS}}{C_F}\left[t - (a + \tau) + (a + \tau)e^{-t/\tau}\right],\qquad \frac{I_{SS}}{C_F}(a + \tau) = \frac{I_{SS}}{C_F}\cdot\frac{C_F + C_L}{g_m} = \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right).$$

Therefore

$$\boxed{V_{out}(t) = \frac{I_{SS}}{C_F}\,t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m}.}$$

**Checks.**
- $V_{out}(0^+) = 0 - \frac{I_{SS}}{g_m}(1 + \frac{C_L}{C_F}) + \frac{I_{SS}}{g_m}(1 + \frac{C_L}{C_F}) = 0$, as it must be: $C_L$ cannot jump.
- $\dot V_{out}(0^+) = \dfrac{I_{SS}}{C_F} - \dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)\dfrac{g_m}{C_L} = \dfrac{I_{SS}}{C_F} - \dfrac{I_{SS}}{C_L} - \dfrac{I_{SS}}{C_F} = -\dfrac{I_{SS}}{C_L}$. At $t = 0^+$, $V_X$ has not moved, so $M_{out}$ still carries its bias current and all of $I_{SS}$ is pulled out of $C_L$ through $C_F$.
- Long times: $V_X \to -\frac{I_{SS}}{g_m}(1 + C_L/C_F)$. $M_{out}$ gives up $I_{SS}$ (now flowing through $C_F$) plus $C_LI_{SS}/C_F$ (charging $C_L$ at the ramp rate), and the output ramps up at $I_{SS}/C_F$, as in a Miller integrator.

### Step 7 — The three terms and the shape of $V_{out}(t)$

1. **Ramp** $\dfrac{I_{SS}}{C_F}t$, slope $I_{SS}/C_F$: $I_{SS}$ charging $C_F$ (integrator behaviour).
2. **Negative step** $-\dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)$ for all $t > 0$: the gate-voltage change that makes $M_{out}$ give up the current now flowing through $C_F$ and into $C_L$.
3. **Decaying exponential** $+\dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)e^{-t/\tau}$: cancels the step at $t = 0$ and decays with $\tau = C_L/g_m$ (gone after about $5\tau$).

Integrating (1) gives $V_{out} - V_X = I_{SS}t/C_F$ exactly, so terms 2 and 3 together are the gate voltage $V_X(t)$: it moves from 0 to $-(I_{SS}/g_m)(1 + C_L/C_F)$ with time constant $\tau$, and the output follows it plus the growing voltage across $C_F$.

Example with $C_F = C_L$ (then $\tau = C_F/g_m$, and in units of $I_{SS}/g_m$ the ramp is $t/\tau$, the step $-2$, and the exponential $2e^{-t/\tau}$):

| $t/\tau$ | ramp | step | exponential | $V_{out}$ (units of $I_{SS}/g_m$) |
|---|---|---|---|---|
| 0 | 0 | −2 | 2.000 | 0 |
| 0.25 | 0.25 | −2 | 1.558 | −0.192 |
| 0.5 | 0.50 | −2 | 1.213 | −0.287 |
| 0.693 | 0.693 | −2 | 1.000 | **−0.307** (minimum) |
| 1 | 1.00 | −2 | 0.736 | −0.264 |
| 2 | 2.00 | −2 | 0.271 | 0.271 |
| 3 | 3.00 | −2 | 0.100 | 1.100 |
| 5 | 5.00 | −2 | 0.013 | 3.013 |

**Shape.** $V_{out}$ starts at 0 with slope $-I_{SS}/C_L$, dips below zero, turns around at $t_{min}$, crosses zero, and approaches the asymptote $\frac{I_{SS}}{C_F}t - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)$, a ramp of slope $I_{SS}/C_F$ shifted down by the step.

### Step 8 — Time and value of the minimum

$$\frac{dV_{out}}{dt} = \frac{I_{SS}}{C_F} - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)\frac{g_m}{C_L}e^{-t/\tau} = \frac{I_{SS}}{C_F} - I_{SS}\left(\frac{1}{C_L} + \frac{1}{C_F}\right)e^{-t/\tau} = 0$$

gives

$$e^{-t_{min}/\tau} = \frac{1/C_F}{1/C_L + 1/C_F} = \frac{C_L}{C_L + C_F},
\qquad
\boxed{t_{min} = \tau\ln\frac{C_L + C_F}{C_L} = \frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right).}$$

The second derivative, $I_{SS}(1/C_L + 1/C_F)e^{-t/\tau}/\tau$, is positive, so this is a minimum. Substituting $e^{-t_{min}/\tau} = C_L/(C_L + C_F)$:

$$
\begin{aligned}
V_{out}(t_{min}) &= \frac{I_{SS}}{C_F}\cdot\frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right) - \frac{I_{SS}}{g_m}\cdot\frac{C_F + C_L}{C_F}\left(1 - \frac{C_L}{C_L + C_F}\right)\\
&= \frac{I_{SS}}{g_m}\cdot\frac{C_L}{C_F}\ln\left(1 + \frac{C_F}{C_L}\right) - \frac{I_{SS}}{g_m}\\
&= -\frac{I_{SS}}{g_m}\left[1 - \frac{C_L}{C_F}\ln\left(1 + \frac{C_F}{C_L}\right)\right],
\end{aligned}
$$

which is negative because $\ln(1 + x) < x$ for $x > 0$. For $C_F = C_L$: $t_{min} = \tau\ln2 = 0.693\,C_L/g_m$ and $V_{min} = -(1 - \ln2)I_{SS}/g_m = -0.307\,I_{SS}/g_m$, as in the table.

For $C_L \to 0$, $\tau \to 0$ and $t_{min} \to 0$: the dip becomes the familiar instantaneous drop of $-I_{SS}/g_m$ followed by the ramp. $C_L$ smooths that drop.

### Result

$$V_{out}(t) = \frac{I_{SS}}{C_F}\,t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m},$$

from the differential equation $\dfrac{C_FC_L}{g_m}\ddot V_{out} + C_F\dot V_{out} = I_{in} - \dfrac{C_F}{g_m}\dot I_{in}$.
- The terms are a ramp of slope $I_{SS}/C_F$, a negative step $-(I_{SS}/g_m)(1 + C_L/C_F)$ and a positive exponential of the same height decaying with $\tau = C_L/g_m$.
- They sum to $V_{out}(0^+) = 0$ with initial slope $-I_{SS}/C_L$.
- The output dips to a minimum at
$$t_{min} = \frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right),$$
where $V_{out} = -\dfrac{I_{SS}}{g_m}\left[1 - \dfrac{C_L}{C_F}\ln\left(1 + \dfrac{C_F}{C_L}\right)\right]$, and then rises along the shifted ramp.

**Common mistake.** Giving the exponential term a minus sign. Then $V_{out}(0^+) = -2(I_{SS}/g_m)(1 + C_L/C_F)$, a jump that $C_L$ cannot produce, and the minimum disappears.

**Common mistake.** Using $C_F/g_m$ or $r_OC_L$ as the time constant. The exponential comes from the pole $1 + sC_L/g_m$ ($r_O$ is neglected); $C_F/g_m$ appears only in the zero.

**Common mistake.** Forgetting the current through $C_F$ in the output KCL, i.e. writing $g_mV_X + C_L\dot V_{out} = 0$. All of $I_{in}$ is drawn from the output through $C_F$; leaving it out loses both the zero and the initial dip.
