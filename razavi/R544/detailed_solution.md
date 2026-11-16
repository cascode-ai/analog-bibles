# Detailed solution - R544

**Approach.** Express every gate–source and drain–source voltage through the internal node voltages, using the fact that $R$ puts the drain of $M_1$ $RI_{REF}$ above its gate. Each transistor's saturation condition then bounds $RI_{REF}$: $M_1$ from above, $M_2$ from below. Body effect enters through $M_1$, whose source is not at its bulk potential.

### Step 1 — Nodes and basic relations

Call S the drain of $M_2$ (source of $M_1$), D the drain of $M_1$ (top of $R$, gate of $M_2$), and E the bottom of $R$ (gate of $M_1$, where $I_{REF}$ is drawn). The gates draw no current, so $I_{REF}$ flows through $M_2$, $M_1$ and $R$:

$$V_D - V_E = RI_{REF},$$

$$
\begin{aligned}
M_2:&\quad |V_{GS2}| = V_{DD} - V_D, & |V_{DS2}| &= V_{DD} - V_S,\\
M_1:&\quad |V_{GS1}| = V_S - V_E, & |V_{DS1}| &= V_S - V_D .
\end{aligned}
$$

Combining the last two with the resistor drop:

$$|V_{DS1}| = (V_S - V_E) - (V_D - V_E) = |V_{GS1}| - RI_{REF}. \tag{1}$$

Each PMOS is saturated if $|V_{DS}| \ge |V_{GS}| - |V_{TH}|$, i.e. its drain does not rise above its gate by more than $|V_{TH}|$.

### Step 2 — $M_1$ in saturation: the upper bound

With (1):

$$|V_{GS1}| - RI_{REF} \ge |V_{GS1}| - |V_{TH1}| \quad\Longrightarrow\quad RI_{REF} \le |V_{TH1}| .$$

The drain of $M_1$ (D) is $RI_{REF}$ above its gate (E), which may not exceed one threshold; a larger drop pushes $M_1$ into triode.

### Step 3 — $M_2$ in saturation: the lower bound

For $M_2$ (gate D, drain S), saturation requires $V_S \le V_D + |V_{TH2}|$:

$$V_S - V_D \le |V_{TH2}| \quad\Longleftrightarrow\quad |V_{DS1}| \le |V_{TH2}| ,$$

and with (1):

$$|V_{GS1}| - RI_{REF} \le |V_{TH2}| \quad\Longrightarrow\quad RI_{REF} \ge |V_{GS1}| - |V_{TH2}| .$$

With too small a drop, $M_1$ takes too large a $|V_{DS}|$ and squeezes $M_2$ into triode.

### Step 4 — Combined result and its meaning

$$\boxed{|V_{GS1}| - |V_{TH2}| \;\le\; RI_{REF} \;\le\; |V_{TH1}|}$$

With $|V_{GS1}| = |V_{TH1}| + V_{ov1}$ and $V_{ov1} = \sqrt{2I_{REF}/[\mu_pC_{ox}(W/L)_1]}$:

$$V_{ov1} + \left(|V_{TH1}| - |V_{TH2}|\right) \;\le\; RI_{REF} \;\le\; |V_{TH1}| .$$

Without body effect ($|V_{TH1}| = |V_{TH2}| = |V_{TH}|$):

$$V_{ov1} \le RI_{REF} \le |V_{TH}| \approx 0.8\ \mathrm{V}.$$

$R$ must drop at least the overdrive of $M_1$ (so that $M_2$ keeps enough $|V_{DS}|$) but less than a threshold (so that $M_1$ stays saturated); a window exists as long as $V_{ov1} < |V_{TH2}|$.

### Step 5 — Body effect of $M_1$

$M_2$'s source is at its bulk ($V_{DD}$), so $|V_{TH2}| = |V_{TH0}| = 0.8$ V. $M_1$'s source is $|V_{DS2}|$ below its bulk:

$$|V_{TH1}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + |V_{DS2}|} - \sqrt{2|\phi_F|}\right) = 0.8 + 0.4\left(\sqrt{0.8 + |V_{DS2}|} - \sqrt{0.8}\right)\ \mathrm{V}.$$

So $|V_{TH1}| > |V_{TH2}|$, and both bounds move up: the lower one by $|V_{TH1}| - |V_{TH2}|$, the upper one to the larger $|V_{TH1}|$.

**Illustration.** With both devices sized for $V_{ov1} = V_{ov2} = 0.2$ V, the node relations give $|V_{DS2}| = |V_{GS2}| - |V_{DS1}| = |V_{GS2}| - |V_{GS1}| + RI_{REF}$.

- **At the lower bound**, $M_2$ is at the edge of saturation, $|V_{DS2}| = V_{ov2} = 0.2$ V:
$$|V_{TH1}| = 0.8 + 0.4(\sqrt{1.0} - 0.894) = 0.842\ \mathrm{V},\qquad RI_{REF,min} = 0.2 + 0.042 = 0.24\ \mathrm{V}.$$
- **At the upper bound**, $RI_{REF} = |V_{TH1}|$, so $|V_{DS2}| = (0.2 + 0.8) - (0.2 + |V_{TH1}|) + |V_{TH1}| = 0.8$ V:
$$|V_{TH1}| = 0.8 + 0.4(\sqrt{1.6} - 0.894) = 0.8 + 0.4(1.265 - 0.894) = 0.948\ \mathrm{V} = RI_{REF,max}.$$

So $0.24\ \mathrm{V} \lesssim RI_{REF} \lesssim 0.95$ V, compared with $0.2$–$0.8$ V without body effect.

### Result

$$|V_{GS1}| - |V_{TH2}| \;\le\; RI_{REF} \;\le\; |V_{TH1}| .$$

- The **maximum**, $|V_{TH1}|$, keeps $M_1$ saturated (its drain may not rise more than a threshold above its gate).
- The **minimum**, $|V_{GS1}| - |V_{TH2}| = V_{ov1} + (|V_{TH1}| - |V_{TH2}|)$, keeps $M_2$ saturated (it needs $|V_{DS1}| \le |V_{TH2}|$).

Without body effect this is $V_{ov1} \le RI_{REF} \le |V_{TH}| \approx 0.8$ V, with $V_{ov1} = \sqrt{2I_{REF}/[\mu_pC_{ox}(W/L)_1]}$. With body effect, $M_1$'s source sits $|V_{DS2}|$ below its bulk, so $|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + |V_{DS2}|} - \sqrt{0.8})$ V exceeds $|V_{TH2}| = 0.8$ V, and both bounds rise accordingly.

**Common mistake.** Swapping the bounds, e.g. $RI_{REF} \ge |V_{TH}|$ or $RI_{REF} \le V_{ov}$. A larger drop across $R$ lifts the drain of $M_1$ toward its gate-plus-threshold (bad for $M_1$) but lowers $M_1$'s $|V_{DS}|$ (good for $M_2$).

**Common mistake.** Putting the gate of $M_1$ at its own drain (top of $R$), which would make it diode-connected and $R$ irrelevant to its saturation. Here the gate of $M_1$ is at the *bottom* of $R$ and the gate of $M_2$ at the *top*.

**Common mistake.** Using a single threshold for both devices without comment. $M_1$'s source is not at $V_{DD}$, so body effect raises its threshold and shifts both bounds, by about 0.04–0.15 V in the illustration.
