# Golden Solution - R626

## Reference answer

The PMOS loads contribute to the input offset in proportion to $g_{mP}/g_{mN}$. Shrinking that contribution at a fixed current requires a small $g_{mP}$, i.e., a large PMOS overdrive $|V_{GS}-V_{TH}|_P$, and that overdrive is subtracted from the output swing.
- Input-referred offset: $V_{OS,in} = \left\{\dfrac{|V_{GS}-V_{TH}|_P}{2}\left[\dfrac{\Delta(W/L)}{W/L}\right]_P + \Delta V_{TH,P}\right\}\dfrac{g_{mP}}{g_{mN}} + \dfrac{(V_{GS}-V_{TH})_N}{2}\left[\dfrac{\Delta(W/L)}{W/L}\right]_N + \Delta V_{TH,N}$ (terms add in power).
- With equal currents $I_{SS}/2$, $g_m = 2I_D/|V_{GS}-V_{TH}|$, so $g_{mP}/g_{mN} = (V_{GS}-V_{TH})_N/|V_{GS}-V_{TH}|_P$: the PMOS threshold-mismatch term becomes $\Delta V_{TH,P}(V_{GS}-V_{TH})_N/|V_{GS}-V_{TH}|_P$, which falls only if $|V_{GS}-V_{TH}|_P$ rises (smaller $(W/L)_P$, with $V_b$ lowered accordingly).
- Output swing: $M_3$/$M_4$ stay saturated only for $V_{out} \le V_{DD} - |V_{GS}-V_{TH}|_P$, so a larger PMOS overdrive directly lowers the maximum output level (the minimum is set by the input pair, about $V_{in,CM} - V_{TH,N}$). Since the tail current is fixed, current cannot be traded instead, so lower offset means less swing.
- (Lowering $(V_{GS}-V_{TH})_N$ with wider input devices also reduces the offset without costing swing, at the expense of input capacitance.)

## Grading notes

+2: identifies that the load (PMOS) mismatch is referred to the input through $g_{mP}/g_{mN}$, that reducing it at fixed current requires a large PMOS overdrive (small $g_{mP}$), and that this overdrive is the headroom the loads need ($V_{out,max} = V_{DD} - |V_{GS}-V_{TH}|_P$), so lower offset costs output swing. +1: the trade-off stated correctly with the $g_{mP}/g_{mN}$ mechanism only implied. 0: correct offset expression or correct headroom statement, but the link between them missing. -2 (asserted as fact): claims that a larger PMOS overdrive increases the offset or increases the swing, or that the PMOS loads do not affect the offset.
