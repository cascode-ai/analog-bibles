# Detailed solution - R053

**Approach.** Write the dc current equations of the transistor in every region and look at how $\mu_nC_{ox}$ and $W/L$ enter them. If they always appear as one product, no dc measurement can separate them, because an increase of one factor and an equal decrease of the other leave every reading unchanged. Then check whether a second device with a known 2:1 aspect ratio adds the missing information.

### Step 1 — Only the product $\mu_nC_{ox}W/L$ appears

With $\lambda = \gamma = 0$ and $V_{ov} = V_{GS} - V_{TH}$:

$$
I_D = \begin{cases}
0, & V_{GS} \le V_{TH} \quad\text{(cut-off)},\\[4pt]
\mu_nC_{ox}\dfrac{W}{L}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right], & V_{DS} \le V_{ov} \quad\text{(triode)},\\[10pt]
\dfrac12\,\mu_nC_{ox}\dfrac{W}{L}\,V_{ov}^2, & V_{DS} \ge V_{ov} \quad\text{(saturation)}.
\end{cases}
$$

The gate draws no dc current, so the only dc observables are terminal voltages and the drain current. In every line, $\mu_nC_{ox}$ and $W/L$ appear only through the product

$$K = \mu_nC_{ox}\frac{W}{L} .$$

- **What dc tests can give.** $K$ itself. For example, bias the device in saturation at a known $V_{GS}$, measure $I_D$, and compute
$$K = \frac{2I_D}{(V_{GS} - V_{TH})^2} .$$
Any other dc test (triode, several bias points, a curve fit) also gives just $K$.
- **What they cannot give.** The split of $K$ into its two factors. For any $\alpha > 0$, replace
$$\mu_nC_{ox} \to \alpha\,\mu_nC_{ox}, \qquad \frac{W}{L} \to \frac{1}{\alpha}\frac{W}{L} .$$
Then $K \to \alpha\cdot\frac{1}{\alpha}K = K$, so every current in every region, at every bias point, is unchanged: the real and the "scaled" device are indistinguishable by dc measurements.

**Example.** A device with $\mu_nC_{ox} = 100\ \mu\mathrm{A/V^2}$ and $W/L = 20$ has $K = 2\ \mathrm{mA/V^2}$, and so does a device with $\mu_nC_{ox} = 200\ \mu\mathrm{A/V^2}$ and $W/L = 10$. At $V_{ov} = 0.3$ V both carry $\tfrac12(2\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 90\ \mu\mathrm{A}$ in saturation, and they agree at every other bias point too.

**Answer to the first question: no.** With $C_{ox}$ not measurable independently, dc tests determine only the product $\mu_nC_{ox}W/L$.

### Step 2 — Two transistors with a 2:1 aspect ratio

Let device 1 have aspect ratio $(W/L)_1$ and device 2 have $(W/L)_2 = 2(W/L)_1$, in the same process (same $\mu_nC_{ox}$ and $V_{TH}$). The unknowns are $\mu_nC_{ox}$ and $(W/L)_1$. By Step 1, dc measurements on each device give its own product:

$$
\begin{aligned}
K_1 &= \mu_nC_{ox}\left(\frac{W}{L}\right)_1,\\
K_2 &= \mu_nC_{ox}\left(\frac{W}{L}\right)_2 = 2\,\mu_nC_{ox}\left(\frac{W}{L}\right)_1 = 2K_1 .
\end{aligned}
$$

The second measurement just returns twice the first: it is **not an independent equation** (it is still a useful consistency check of the 2:1 ratio). There remains one equation, $K_1 = \mu_nC_{ox}(W/L)_1$, for two unknowns.

The scaling argument confirms it: $\mu_nC_{ox} \to \alpha\mu_nC_{ox}$, $(W/L)_1 \to (W/L)_1/\alpha$ and $(W/L)_2 \to (W/L)_2/\alpha$ keep $K_1$, $K_2$ and the 2:1 ratio all unchanged. A known **ratio** of aspect ratios contains no absolute scale.

**Answer to the second question: still no.**

### Step 3 — What would be needed

Splitting $K$ requires one piece of information that does not come through $K$:

- the absolute dimensions $W$ and $L$ (from the layout or a microscope), which give $W/L$ and then $\mu_nC_{ox} = K/(W/L)$; or
- an independent value of $\mu_nC_{ox}$, for example $C_{ox}$ from a capacitance–voltage (C–V) measurement of a gate of known area combined with a known mobility $\mu_n$; then $W/L = K/(\mu_nC_{ox})$.

### Result

**No, in both cases.** In cut-off, triode and saturation, the dc drain current depends on $\mu_nC_{ox}$ and $W/L$ only through the product $K = \mu_nC_{ox}W/L$, so dc tests yield $K$ (e.g. $K = 2I_D/(V_{GS} - V_{TH})^2$ in saturation) but not its factors: scaling $\mu_nC_{ox}$ up by $\alpha$ and $W/L$ down by $\alpha$ changes no measurement. With two devices of aspect ratios in the ratio 2:1, the measurements give $K_1$ and $K_2 = 2K_1$, which is one independent equation for two unknowns; a ratio carries no absolute scale. Separating the factors requires independent information, such as the absolute $W$ and $L$, or $C_{ox}$ from a C–V measurement together with the mobility.

**Common mistake.** Proposing a procedure (two bias points, triode and saturation, several $V_{DS}$) and claiming that it gives $\mu_nC_{ox}$ and $W/L$ separately. Extra bias points add equations, but all of them are equations for the same product $K$.

**Common mistake.** Believing that the second transistor supplies the missing equation. Its result $K_2 = 2K_1$ follows from the first measurement and the known ratio; only an absolute quantity ($C_{ox}$, $W$ or $L$) can break the scaling ambiguity.
