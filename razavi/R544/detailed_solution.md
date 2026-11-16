# Detailed solution - R544

**Approach.** Name the three internal nodes, express every gate–source and drain–source voltage through them, and use the fact that the resistor makes the drain of $M_1$ sit $RI_{REF}$ above the gate of $M_1$. The saturation condition of each transistor then becomes a bound on $RI_{REF}$: $M_1$ gives the upper bound and $M_2$ the lower bound. Body effect enters through $M_1$, whose source is not at its bulk potential.

### Step 1 — Nodes and basic relations

Name the nodes:
- **S**: the drain of $M_2$ = the source of $M_1$;
- **D**: the drain of $M_1$ = the top of $R$ = the gate of $M_2$;
- **E**: the bottom of $R$ = the gate of $M_1$, where $I_{REF}$ is drawn to ground.

The gates draw no current, so the same current $I_{REF}$ flows through $M_2$, $M_1$ and $R$. Ohm's law for $R$:

$$V_D - V_E = RI_{REF}.$$

PMOS voltages, written as positive magnitudes:

$$
\begin{aligned}
M_2:&\quad |V_{GS2}| = V_{DD} - V_D, & |V_{DS2}| &= V_{DD} - V_S,\\
M_1:&\quad |V_{GS1}| = V_S - V_E, & |V_{DS1}| &= V_S - V_D .
\end{aligned}
$$

Combining the last two with Ohm's law:

$$|V_{DS1}| = (V_S - V_E) - (V_D - V_E) = |V_{GS1}| - RI_{REF}. \tag{1}$$

The resistor sets how far the drain of $M_1$ sits below its source, relative to its gate.

**Saturation condition (PMOS):** $|V_{DS}| \ge |V_{GS}| - |V_{TH}|$. Equivalently, the drain must not rise above the gate by more than $|V_{TH}|$ ($V_D \le V_G + |V_{TH}|$).

### Step 2 — $M_1$ in saturation: the upper bound

Apply the condition to $M_1$ and substitute (1):

$$|V_{GS1}| - RI_{REF} \ge |V_{GS1}| - |V_{TH1}| \quad\Longrightarrow\quad RI_{REF} \le |V_{TH1}| .$$

Directly: the drain of $M_1$ (node D) is $RI_{REF}$ above its gate (node E), and that may not exceed one threshold. If $R$ drops too much, $M_1$ is pushed into the triode region.

### Step 3 — $M_2$ in saturation: the lower bound

For $M_2$ the gate is D and the drain is S. Saturation requires $V_S \le V_D + |V_{TH2}|$, i.e.

$$V_S - V_D \le |V_{TH2}| \quad\Longleftrightarrow\quad |V_{DS1}| \le |V_{TH2}| .$$

Substitute (1):

$$|V_{GS1}| - RI_{REF} \le |V_{TH2}| \quad\Longrightarrow\quad RI_{REF} \ge |V_{GS1}| - |V_{TH2}| .$$

If $R$ drops too little, $M_1$ takes too large a $|V_{DS}|$, and $M_2$, whose $|V_{DS}|$ is what remains of its own gate drive, is squeezed into the triode region.

### Step 4 — Combined result and its meaning

$$\boxed{|V_{GS1}| - |V_{TH2}| \;\le\; RI_{REF} \;\le\; |V_{TH1}|}$$

Write $|V_{GS1}| = |V_{TH1}| + V_{ov1}$, with the overdrive from the square law, $V_{ov1} = \sqrt{2I_{REF}/[\mu_pC_{ox}(W/L)_1]}$. Then

$$V_{ov1} + \left(|V_{TH1}| - |V_{TH2}|\right) \;\le\; RI_{REF} \;\le\; |V_{TH1}| .$$

**Without body effect** ($|V_{TH1}| = |V_{TH2}| = |V_{TH}|$) this becomes

$$V_{ov1} \le RI_{REF} \le |V_{TH}| \approx 0.8\ \mathrm{V}.$$

The resistor must drop at least the overdrive of $M_1$ (so that $M_2$ keeps enough $|V_{DS}|$), but less than a threshold (so that $M_1$ stays saturated). A valid window exists as long as $V_{ov1} < |V_{TH2}|$.

### Step 5 — Body effect of $M_1$

Both bulks are at $V_{DD}$. $M_2$'s source is also at $V_{DD}$, so $|V_{TH2}| = |V_{TH0}| = 0.8$ V. $M_1$'s source is $|V_{DS2}|$ below its bulk, so its threshold is raised:

$$|V_{TH1}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + |V_{DS2}|} - \sqrt{2|\phi_F|}\right) = 0.8 + 0.4\left(\sqrt{0.8 + |V_{DS2}|} - \sqrt{0.8}\right)\ \mathrm{V}.$$

Hence $|V_{TH1}| > |V_{TH2}|$. Both bounds move up: the lower bound by $|V_{TH1}| - |V_{TH2}|$, and the upper bound to the larger $|V_{TH1}|$.

**Illustration.** Suppose both devices are sized for $V_{ov1} = V_{ov2} = 0.2$ V. From the node relations, $|V_{DS2}| = |V_{GS2}| - |V_{DS1}| = |V_{GS2}| - |V_{GS1}| + RI_{REF}$.

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

**Common mistake.** Swapping the bounds, e.g. writing $RI_{REF} \ge |V_{TH}|$ or $RI_{REF} \le V_{ov}$. A larger drop across $R$ raises the drain of $M_1$ toward its gate-plus-threshold (bad for $M_1$) but lowers $M_1$'s $|V_{DS}|$ (good for $M_2$). So $M_1$ caps $RI_{REF}$ from above and $M_2$ bounds it from below.

**Common mistake.** Misreading the gate connections, for example putting the gate of $M_1$ at its own drain (top of $R$). Then $M_1$ would be diode-connected and $R$ would play no role in its saturation. In this circuit the gate of $M_1$ is at the *bottom* of $R$ and the gate of $M_2$ is at the *top*.

**Common mistake.** Using a single threshold for both devices without comment. $M_1$'s source is not at $V_{DD}$, so its threshold is raised by the body effect. This shifts both bounds, by about 0.04–0.15 V in the illustration.
