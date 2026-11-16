# Detailed solution - R228

**Approach.** The divider fixes $V_{GS}$ and $V_{TH}$ does not depend on temperature, so the overdrive is the same at 300 K and 370 K. The square-law current is then proportional to $\mu_n$, and the temperature change scales $I_{out}$ by $\mu_n(370\ \mathrm{K})/\mu_n(300\ \mathrm{K})$.

### Step 1 — Nominal design point at 300 K

The gate draws no current, so $V_{GS} = V_{DD}R_2/(R_1 + R_2)$ depends only on $V_{DD}$ and the resistor ratio, which does not change with temperature (both resistors drift together): **$V_{GS}$ is the same at both temperatures**. With $W/L = 50/0.5 = 100$,

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

and $I_{out} = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ ($\lambda = 0$) gives

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.273 = 0.973\ \mathrm{V} .$$

### Step 2 — What changes with temperature

$$I_{out}(T) = \frac12\mu_n(T)\,C_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 .$$

$C_{ox}$ and $W/L$ are geometric, $V_{GS} = 0.973$ V is fixed by the divider, and $V_{TH} = 0.7$ V is independent of $T$ by assumption. So the overdrive stays at 0.273 V and

$$\frac{I_{out}(370\ \mathrm{K})}{I_{out}(300\ \mathrm{K})} = \frac{\mu_n(370\ \mathrm{K})}{\mu_n(300\ \mathrm{K})} .$$

### Step 3 — Mobility ratio

With $\mu_n \propto T^{-3/2}$:

$$\frac{\mu_n(370\ \mathrm{K})}{\mu_n(300\ \mathrm{K})} = \left(\frac{370}{300}\right)^{-3/2} ,$$

$$
\begin{aligned}
\frac{370}{300} &= 1.2333,\\
\left(1.2333\right)^{3/2} &= 1.2333\times\sqrt{1.2333} = 1.2333\times1.1106 = 1.3697,\\
\left(1.2333\right)^{-3/2} &= \frac{1}{1.3697} = 0.730 .
\end{aligned}
$$

The mobility at 370 K is 73 % of its 300-K value, so $\mu_nC_{ox}$ drops from 134 to $134\times0.730 = 97.8\ \mu\mathrm{A/V^2}$.

### Step 4 — New current

$$I_{out}(370\ \mathrm{K}) = 0.730\times0.5\ \mathrm{mA} = 0.365\ \mathrm{mA} .$$

Directly with the square law at 370 K:

$$I_{out} = \frac12(97.8\ \mu\mathrm{A/V^2})(100)(0.273\ \mathrm{V})^2 = (4.89\ \mathrm{mA/V^2})(0.0746\ \mathrm{V^2}) = 0.365\ \mathrm{mA}\ \checkmark$$

$$\Delta I_{out} = 0.365 - 0.5 = -0.135\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = 0.730 - 1 = -27\ \% .$$

With the gate voltage held fixed, nothing compensates for the loss of mobility. (In a real device $|V_{TH}|$ also falls with temperature, partly offsetting it; the problem excludes that effect.) A change of more than a quarter for a 70-K rise is another reason why a fixed-$V_{GS}$ bias is a poor current source.

### Result

The overdrive stays at 0.273 V, so $I_{out} \propto \mu_n \propto T^{-3/2}$:

$$I_{out}(370\ \mathrm{K}) = 0.5\ \mathrm{mA}\times\left(\frac{370}{300}\right)^{-3/2} = 0.5\ \mathrm{mA}\times0.730 \approx 0.365\ \mathrm{mA} .$$

$I_{out}$ **drops by about 0.135 mA, i.e. about 27 %.**

**Common mistake.** Using $(370/300)^{+3/2} = 1.37$ and predicting a 37 % *increase*. The mobility *decreases* with temperature, so with a fixed overdrive the current decreases.

**Common mistake.** Using the square root of the mobility ratio, $(370/300)^{-1/2} = 0.90$ (a 10 % drop), as for $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$. With $V_{GS}$ and $V_{TH}$ fixed, the current itself is proportional to $\mu_n$.
