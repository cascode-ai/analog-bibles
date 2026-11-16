# Detailed solution - R556

**Approach.** In this clock phase, decide which elements are actually connected. $S_2$ is open, so only $I_1$ flows into the transistor, and the diode equation gives $V_X$. $S_1$ is closed, so it ties the op amp's inverting input directly to its output, making the op amp a unity-gain follower of $V_X$. The capacitors only store charge for the next phase.

### Step 1 — What the circuit looks like with $S_1$ on and $S_2$ off

Reading the figure:

- $I_1$ flows from $V_{DD}$ into node X at all times. $I_2$ reaches X only through $S_2$.
- $Q_1$ is a pnp transistor with its emitter at X and its base and collector grounded, so it behaves as a diode from X to ground.
- X drives the noninverting (+) input of the op amp.
- The inverting (−) input is a node we call N. N connects to ground through $C_2$, to $V_{out}$ through $C_1$, and to $V_{out}$ through switch $S_1$.

In this phase:

- **$S_2$ is off**, so $I_2$ is disconnected from X. The only current entering X is $I_1$.
- **$S_1$ is on**, so N is shorted to $V_{out}$, and $C_1$ (connected between N and $V_{out}$) is short-circuited.

### Step 2 — The voltage at X

The op amp is ideal, so its + input draws no current. All of $I_1$ therefore flows into the emitter of $Q_1$: $I_E = I_1$. Neglecting base current, the collector current is also $I_1$.

The **exponential law** of a bipolar transistor relates its collector current to its emitter–base voltage:

$$I_C = I_S\exp\frac{V_{EB}}{V_T},$$

where $I_S$ is the saturation current and $V_T = kT/q$ is the thermal voltage. Solve for $V_{EB}$ by taking the natural logarithm:

$$V_{EB} = V_T\ln\frac{I_C}{I_S}.$$

The base is grounded, so the emitter voltage is $V_X = V_{EB}$, and with $I_C = I_1$:

$$V_X = V_{EB1}(I_1) = V_T\ln\frac{I_1}{I_S}.$$

### Step 3 — The op amp is a unity-gain follower

With $S_1$ closed, the output is connected straight back to the inverting input. This is negative feedback with a feedback factor of 1. For an ideal op amp (infinite gain), negative feedback forces the two inputs to the same voltage (the "virtual short"):

$$V_- = V_+ = V_X .$$

The closed switch makes the inverting input and the output the same node:

$$V_{out} = V_- .$$

Combining the two:

$$V_{out} = V_X = V_T\ln\frac{I_1}{I_S}.$$

To see why the closed-loop gain is exactly 1, write the op amp with a finite gain $A$: $V_{out} = A(V_X - V_-) = A(V_X - V_{out})$. Solving, $V_{out}(1 + A) = AV_X$, so

$$V_{out} = \frac{A}{1 + A}V_X \;\to\; V_X \quad (A \to \infty).$$

### Step 4 — State of the two capacitors

- **$C_1$** has both plates connected to the same node (N = $V_{out}$) through the closed switch, so its voltage is zero and it holds no charge.
- **$C_2$** sits between N and ground, so it is charged to $V_N = V_{out}$:
$$V_{C2} = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S}, \qquad Q_{C2} = C_2\,V_T\ln\frac{I_1}{I_S}.$$

In steady state no current flows in either capacitor, so they do not affect the dc output in this phase. $C_2$ simply memorizes $V_{EB}(I_1)$, and $C_1$ is reset.

### Step 5 — Why this phase matters (context)

This phase is the "sample" phase of a single-junction bandgap. In the next phase ($S_1$ off, $S_2$ on), $Q_1$ carries $I_1 + I_2$, so $V_X$ rises to $V_{EB}(I_1 + I_2)$. Node N is then floating (no dc path), so its charge is conserved. Charge conservation at N gives

$$C_2V_{EB}(I_1) = C_2V_X' + C_1(V_X' - V_{out}'),$$

where $V_X' = V_{EB}(I_1 + I_2)$ and $V_{out}'$ is the new output. Solving for $V_{out}'$:

$$V_{out}' = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}\,V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

That is a $V_{EB}$ plus an amplified PTAT term, all from one junction. The present phase supplies the reference charge $C_2V_{EB}(I_1)$ for that result.

### Result

With $S_1$ on and $S_2$ off, the op amp is a unity-gain follower and $Q_1$ carries only $I_1$:

$$V_{out} = V_X = V_{EB1}(I_1) = V_T\ln\frac{I_1}{I_S}.$$

$C_1$ holds zero voltage and $C_2$ is charged to $V_{EB}(I_1)$.

**Common mistake.** Using $V_{EB}(I_1 + I_2) = V_T\ln[(I_1 + I_2)/I_S]$. $S_2$ is off in this phase, so $I_2$ does not reach the transistor; only $I_1$ flows through $Q_1$.

**Common mistake.** Treating $C_1$ and $C_2$ as a capacitive feedback divider with gain $1 + C_2/C_1$, or concluding that $C_2$ "pulls" the inverting input to ground so that $V_{out} = 0$. With $S_1$ closed, $C_1$ is shorted and the output is wired directly to the inverting input, so the closed-loop gain is exactly 1. $C_2$ just loads the output and charges to $V_{out}$.

**Common mistake.** Writing $V_{out} = V_{EB}$ without saying at which current. In this circuit the whole point is that $V_{EB}$ is sampled at two different currents in the two phases, so the current ($I_1$ here) must be stated.
