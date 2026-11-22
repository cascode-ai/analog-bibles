# Detailed solution - G213

An ideal current source at the base of $Q_1$ delivers all of $i_i$ as base current, regardless of the input resistance. Follow the current through the follower $Q_1$ into $Q_2$, remembering that only $Q_2$'s collector is connected to the output.

### Step 1 — Currents in the pair

$$
i_{b1}=i_i,\qquad i_{b2}=i_{e1}=(\beta+1)i_i .
$$

$Q_1$'s collector current $\beta i_i$ flows to ac ground and does not reach $R_L$.

### Step 2 — Transresistance

The output current is $i_{c2}=\beta(\beta+1)i_i=10\,100\,i_i$, so

$$
\frac{v_o}{i_i}=-\beta(\beta+1)R_L=-(100)(101)(3\ \mathrm{k\Omega})=-30.3\ \mathrm{M\Omega}.
$$

This is 1 % below the Darlington's −30.6 MΩ, the difference being $Q_1$'s collector current. As in that case, the bias currents set only the input resistance, which does not matter for a current-source drive.
