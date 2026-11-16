# Golden Solution - G144

## Reference answer

Every device is replaced by its complement and the circuit is flipped between the rails ($V_{DD} \leftrightarrow -V_{SS}$):
- $M_2$: n-channel, source at $-V_{SS}$, drain at $V_o$, gate at the error-amplifier output node X.
- $M_{21}$, $M_{22}$: p-channel differential pair; gate of $M_{21}$ = $V_i$, gate of $M_{22}$ = $V_o$; sources joined and fed by $I_{\text{TAILP}}$ from $V_{DD}$ (current flowing from $V_{DD}$ into the common-source node). Drain of $M_{21}$ → node X; drain of $M_{22}$ → node Y.
- $M_{23}$, $M_{24}$: n-channel mirror with sources at $-V_{SS}$; $M_{23}$ diode-connected (gate = drain = node Y), gate of $M_{24}$ tied to node Y, drain of $M_{24}$ → node X.
- $M_{25}$, $M_{26}$: n-channel common-drain transistors with drains at $V_{DD}$; source of $M_{25}$ at node Y, source of $M_{26}$ at node X; their gates tied together to node Z.
- $M_{27}$: n-channel, source at $-V_{SS}$, gate at node Y (mirrors $M_{23}$), drain at node Z.
- $I_{\text{BIASP}}$: from $V_{DD}$ into node Z (pulling Z up, complement of $I_{\text{BIAS}}$ pulling down).
- Bodies: n-channel to $-V_{SS}$, p-channel to $V_{DD}$ (or as in the top circuit).
Check of polarity: $V_i$ up → $M_{21}$ conducts less into X while $M_{24}$ sinks a fixed current → $M_{26}$ must supply more, so X (gate of $M_2$) falls → $M_2$ conducts less → $V_o$ rises, matching [Fig. 2] (bottom amplifier: $+$ input $V_o$, $-$ input $V_i$). Bias loop: $M_{27}$ and $M_{25}$ hold $M_{27}$'s current at $I_{\text{BIASP}}$, so $I_{D23} = I_{D24} = I_{\text{BIASP}}(W/L)_{23}/(W/L)_{27}$ and $I_{D2} = I_{\text{BIASP}}(W/L)_2/(W/L)_{27}$.

## Grading notes

+2: all connections equivalent to the reference: n-channel $M_2$ at $-V_{SS}$ driven from the node shared by $M_{21}$'s drain, $M_{24}$'s drain and $M_{26}$'s source; p-channel input pair with $I_{\text{TAILP}}$ from $V_{DD}$ and the correct cross-connection ($M_{21}$ at $V_i$ to the output node, $M_{22}$ at $V_o$ to the diode $M_{23}$); n-channel mirror and $M_{27}$ at $-V_{SS}$; n-channel followers $M_{25}$/$M_{26}$ with drains at $V_{DD}$ and gates at $M_{27}$'s drain with $I_{\text{BIASP}}$ from $V_{DD}$. +1: one connection wrong or missing that does not change the polarity (e.g. a body connection, or $M_{27}$'s gate shown at node X). 0: device types complemented correctly but several connections wrong or the inputs swapped (wrong feedback polarity) with an explicit doubt. −2 (asserted as fact): device types not complemented ($M_2$ p-channel or the pair n-channel with sources fed from $-V_{SS}$), current sources connected to the wrong rail, or a schematic whose feedback polarity is positive.
