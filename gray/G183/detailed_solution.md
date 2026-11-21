# Detailed solution - G183

Write KVL from the gate of $M_3$ to the gate of $M_4$ through the two followers and the common emitter node. The offset is the value of $V_{ID}$ that makes $V_{OD}=0$, so each junction or gate-source voltage is evaluated under that condition and linearized in the small mismatches. Mismatches are defined as (left side) − (right side), with average values in the denominators:

$$
\Delta V_t=V_{t3}-V_{t4},\quad \Delta I_{BIAS}=I_{BIAS3}-I_{BIAS4},\quad \Delta(W/L)=(W/L)_3-(W/L)_4,\quad \Delta I_S=I_{S1}-I_{S2},\quad \Delta R=R_1-R_2 .
$$

### Step 1 — KVL around the input loop

The gate of $M_3$ is $V_{GS3}$ above the base of $Q_1$, which is $V_{BE1}$ above the common emitter node; the same holds on the right. Hence

$$
V_{ID}=(V_{GS3}+V_{BE1})-(V_{GS4}+V_{BE2})=\Delta V_{GS}+\Delta V_{BE}.
$$

The two contributions can be found separately because each follower carries its own bias current $I_{BIAS}$, independent of the bipolar pair (base currents ignored).

### Step 2 — MOS follower contribution

In saturation with the square law, $I_{BIAS}=\tfrac12k'(W/L)(V_{GS}-V_t)^2$, so

$$
V_{GS}=V_t+\sqrt{\frac{2I_{BIAS}}{k'(W/L)}}=V_t+V_{ov}.
$$

Since $V_{ov}\propto\sqrt{I_{BIAS}/(W/L)}$, a small change gives $\Delta V_{ov}/V_{ov}=\tfrac12\bigl[\Delta I_{BIAS}/I_{BIAS}-\Delta(W/L)/(W/L)\bigr]$. Therefore

$$
\Delta V_{GS}=V_{GS3}-V_{GS4}=\Delta V_t+\frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}}-\frac{\Delta(W/L)}{W/L}\right).
$$

### Step 3 — Bipolar pair contribution

$V_{OD}=V_{C1}-V_{C2}=-I_{C1}R_1+I_{C2}R_2$, so $V_{OD}=0$ requires $I_{C1}/I_{C2}=R_2/R_1$. With $V_{BE}=V_T\ln(I_C/I_S)$,

$$
\Delta V_{BE}=V_{BE1}-V_{BE2}=V_T\ln\!\left(\frac{I_{C1}}{I_{C2}}\cdot\frac{I_{S2}}{I_{S1}}\right)
=V_T\ln\!\left(\frac{R_2}{R_1}\cdot\frac{I_{S2}}{I_{S1}}\right)
\simeq-V_T\left(\frac{\Delta R}{R}+\frac{\Delta I_S}{I_S}\right),
$$

using $\ln(1+x)\approx x$ for small mismatches.

### Step 4 — Offset voltage and its standard deviation

Adding Steps 2 and 3:

$$
V_{OS}\simeq\Delta V_t+\frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}}-\frac{\Delta(W/L)}{W/L}\right)-V_T\left(\frac{\Delta I_S}{I_S}+\frac{\Delta R}{R}\right).
$$

$V_{OS}$ is a linear combination of the mismatches; for independent random variables the variances add with the squared weights:

$$
\sigma_{V_{OS}}^2=\sigma_{\Delta V_t}^2+\left(\frac{V_{ov}}{2}\right)^2\left[\sigma^2_{\Delta I_{BIAS}/I_{BIAS}}+\sigma^2_{\Delta(W/L)/(W/L)}\right]+V_T^2\left[\sigma^2_{\Delta I_S/I_S}+\sigma^2_{\Delta R/R}\right].
$$

The followers draw essentially no gate current, so the input bias current is eliminated, while the bipolar pair keeps its small $V_T$-weighted offset. The price is that the MOS threshold mismatch enters with unit weight and usually dominates (typically several mV), unless $V_{ov}$ is large enough that the current and $W/L$ terms compete.
