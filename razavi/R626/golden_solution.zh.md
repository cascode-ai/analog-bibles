PMOS 负载对输入失调的贡献与 $g_{mP}/g_{mN}$ 成正比。在电流固定时，要减小这一贡献就需要较小的 $g_{mP}$，即较大的 PMOS 过驱动电压（overdrive voltage）$|V_{GS}-V_{TH}|_P$，而这一过驱动电压要从输出摆幅中扣除。
- 输入参考失调（input-referred offset）：$V_{OS,in} = \left\{\dfrac{|V_{GS}-V_{TH}|_P}{2}\left[\dfrac{\Delta(W/L)}{W/L}\right]_P + \Delta V_{TH,P}\right\}\dfrac{g_{mP}}{g_{mN}} + \dfrac{(V_{GS}-V_{TH})_N}{2}\left[\dfrac{\Delta(W/L)}{W/L}\right]_N + \Delta V_{TH,N}$（各项按功率相加）。
- 各管电流均为 $I_{SS}/2$，$g_m = 2I_D/|V_{GS}-V_{TH}|$，因此 $g_{mP}/g_{mN} = (V_{GS}-V_{TH})_N/|V_{GS}-V_{TH}|_P$：PMOS 阈值失配（threshold mismatch）项变为 $\Delta V_{TH,P}(V_{GS}-V_{TH})_N/|V_{GS}-V_{TH}|_P$，只有当 $|V_{GS}-V_{TH}|_P$ 增大时它才会减小（减小 $(W/L)_P$，并相应降低 $V_b$）。
- 输出摆幅：只有当 $V_{out} \le V_{DD} - |V_{GS}-V_{TH}|_P$ 时，$M_3$/$M_4$ 才保持饱和，因此 PMOS 过驱动电压增大会直接降低最高输出电平（最低输出电平由输入对管决定，约为 $V_{in,CM} - V_{TH,N}$）。由于尾电流固定，无法转而在电流上做折中，因此失调越低，摆幅就越小。
- （用更宽的输入器件降低 $(V_{GS}-V_{TH})_N$ 也能减小失调，而且不损失摆幅，但代价是输入电容增大。）
