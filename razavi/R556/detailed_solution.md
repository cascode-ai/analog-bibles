# Detailed solution - R556

**Approach.** With $S_2$ open, only $I_1$ flows into the transistor, which sets $V_X$. With $S_1$ closed, the op amp's inverting input is tied to its output, making it a unity-gain follower of $V_X$. The capacitors only store charge for the next phase.

### Step 1 — The circuit in this phase and the voltage at X

Call the inverting-input node N; it connects to ground through $C_2$ and to $V_{out}$ through both $C_1$ and $S_1$. In this phase:

- **$S_2$ is off**, so $I_2$ is disconnected from X and the only current entering X is $I_1$.
- **$S_1$ is on**, so N is shorted to $V_{out}$ and $C_1$ is short-circuited.

The ideal op amp's + input draws no current, so all of $I_1$ flows into the emitter of $Q_1$ and, neglecting base current, $I_C = I_1$. The base is grounded, so

$$V_X = V_{EB1}(I_1) = V_T\ln\frac{I_1}{I_S}.$$

### Step 2 — The op amp is a unity-gain follower

With $S_1$ closed, the output drives the inverting input directly (feedback factor 1). The ideal op amp forces $V_- = V_+ = V_X$, and $V_{out} = V_-$, so

$$V_{out} = V_X = V_T\ln\frac{I_1}{I_S}.$$

With a finite gain $A$, $V_{out} = A(V_X - V_{out})$ gives

$$V_{out} = \frac{A}{1 + A}V_X \;\to\; V_X \quad (A \to \infty).$$

### Step 3 — State of the two capacitors

- **$C_1$** has both plates on the same node (N = $V_{out}$), so it holds zero voltage and no charge.
- **$C_2$** sits between N and ground, so it is charged to $V_N = V_{out}$:
$$V_{C2} = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S}, \qquad Q_{C2} = C_2\,V_T\ln\frac{I_1}{I_S}.$$

In steady state no current flows in either capacitor, so they do not affect the dc output in this phase: $C_2$ memorizes $V_{EB}(I_1)$, and $C_1$ is reset.

### Step 4 — Why this phase matters (context)

This is the "sample" phase of a single-junction bandgap. In the next phase ($S_1$ off, $S_2$ on), $Q_1$ carries $I_1 + I_2$, so $V_X$ rises to $V_{EB}(I_1 + I_2)$, and N, now floating, conserves its charge:

$$C_2V_{EB}(I_1) = C_2V_X' + C_1(V_X' - V_{out}'),$$

where $V_X' = V_{EB}(I_1 + I_2)$ and $V_{out}'$ is the new output. Solving for $V_{out}'$:

$$V_{out}' = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}\,V_T\ln\left(1 + \frac{I_2}{I_1}\right):$$

a $V_{EB}$ plus an amplified PTAT term, all from one junction. The present phase supplies the reference charge $C_2V_{EB}(I_1)$ for that result.

### Result

With $S_1$ on and $S_2$ off, the op amp is a unity-gain follower and $Q_1$ carries only $I_1$:

$$V_{out} = V_X = V_{EB1}(I_1) = V_T\ln\frac{I_1}{I_S}.$$

$C_1$ holds zero voltage and $C_2$ is charged to $V_{EB}(I_1)$.

**Common mistake.** Using $V_{EB}(I_1 + I_2) = V_T\ln[(I_1 + I_2)/I_S]$. $S_2$ is off in this phase, so only $I_1$ flows through $Q_1$.

**Common mistake.** Treating $C_1$ and $C_2$ as a capacitive feedback divider with gain $1 + C_2/C_1$, or concluding that $C_2$ "pulls" the inverting input to ground so that $V_{out} = 0$. With $S_1$ closed, $C_1$ is shorted and the output is wired to the inverting input, so the gain is exactly 1; $C_2$ just charges to $V_{out}$.

**Common mistake.** Writing $V_{out} = V_{EB}$ without saying at which current. $V_{EB}$ is sampled at two different currents in the two phases, so the current ($I_1$ here) must be stated.
