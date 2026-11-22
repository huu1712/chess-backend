import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RankModel = runtime.Types.Result.DefaultSelection<Prisma.$RankPayload>;
export type AggregateRank = {
    _count: RankCountAggregateOutputType | null;
    _avg: RankAvgAggregateOutputType | null;
    _sum: RankSumAggregateOutputType | null;
    _min: RankMinAggregateOutputType | null;
    _max: RankMaxAggregateOutputType | null;
};
export type RankAvgAggregateOutputType = {
    rating: number | null;
    sortOrder: number | null;
};
export type RankSumAggregateOutputType = {
    rating: number | null;
    sortOrder: number | null;
};
export type RankMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    label: string | null;
    rating: number | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RankMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    label: string | null;
    rating: number | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RankCountAggregateOutputType = {
    id: number;
    code: number;
    label: number;
    rating: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RankAvgAggregateInputType = {
    rating?: true;
    sortOrder?: true;
};
export type RankSumAggregateInputType = {
    rating?: true;
    sortOrder?: true;
};
export type RankMinAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
    rating?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RankMaxAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
    rating?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RankCountAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
    rating?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RankAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RankWhereInput;
    orderBy?: Prisma.RankOrderByWithRelationInput | Prisma.RankOrderByWithRelationInput[];
    cursor?: Prisma.RankWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RankCountAggregateInputType;
    _avg?: RankAvgAggregateInputType;
    _sum?: RankSumAggregateInputType;
    _min?: RankMinAggregateInputType;
    _max?: RankMaxAggregateInputType;
};
export type GetRankAggregateType<T extends RankAggregateArgs> = {
    [P in keyof T & keyof AggregateRank]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRank[P]> : Prisma.GetScalarType<T[P], AggregateRank[P]>;
};
export type RankGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RankWhereInput;
    orderBy?: Prisma.RankOrderByWithAggregationInput | Prisma.RankOrderByWithAggregationInput[];
    by: Prisma.RankScalarFieldEnum[] | Prisma.RankScalarFieldEnum;
    having?: Prisma.RankScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RankCountAggregateInputType | true;
    _avg?: RankAvgAggregateInputType;
    _sum?: RankSumAggregateInputType;
    _min?: RankMinAggregateInputType;
    _max?: RankMaxAggregateInputType;
};
export type RankGroupByOutputType = {
    id: string;
    code: string;
    label: string;
    rating: number;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: RankCountAggregateOutputType | null;
    _avg: RankAvgAggregateOutputType | null;
    _sum: RankSumAggregateOutputType | null;
    _min: RankMinAggregateOutputType | null;
    _max: RankMaxAggregateOutputType | null;
};
export type GetRankGroupByPayload<T extends RankGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RankGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RankGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RankGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RankGroupByOutputType[P]>;
}>>;
export type RankWhereInput = {
    AND?: Prisma.RankWhereInput | Prisma.RankWhereInput[];
    OR?: Prisma.RankWhereInput[];
    NOT?: Prisma.RankWhereInput | Prisma.RankWhereInput[];
    id?: Prisma.StringFilter<"Rank"> | string;
    code?: Prisma.StringFilter<"Rank"> | string;
    label?: Prisma.StringFilter<"Rank"> | string;
    rating?: Prisma.IntFilter<"Rank"> | number;
    sortOrder?: Prisma.IntFilter<"Rank"> | number;
    isActive?: Prisma.BoolFilter<"Rank"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Rank"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rank"> | Date | string;
    users?: Prisma.UserListRelationFilter;
};
export type RankOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
};
export type RankWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.RankWhereInput | Prisma.RankWhereInput[];
    OR?: Prisma.RankWhereInput[];
    NOT?: Prisma.RankWhereInput | Prisma.RankWhereInput[];
    label?: Prisma.StringFilter<"Rank"> | string;
    rating?: Prisma.IntFilter<"Rank"> | number;
    sortOrder?: Prisma.IntFilter<"Rank"> | number;
    isActive?: Prisma.BoolFilter<"Rank"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Rank"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rank"> | Date | string;
    users?: Prisma.UserListRelationFilter;
}, "id" | "code">;
export type RankOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RankCountOrderByAggregateInput;
    _avg?: Prisma.RankAvgOrderByAggregateInput;
    _max?: Prisma.RankMaxOrderByAggregateInput;
    _min?: Prisma.RankMinOrderByAggregateInput;
    _sum?: Prisma.RankSumOrderByAggregateInput;
};
export type RankScalarWhereWithAggregatesInput = {
    AND?: Prisma.RankScalarWhereWithAggregatesInput | Prisma.RankScalarWhereWithAggregatesInput[];
    OR?: Prisma.RankScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RankScalarWhereWithAggregatesInput | Prisma.RankScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rank"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Rank"> | string;
    label?: Prisma.StringWithAggregatesFilter<"Rank"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"Rank"> | number;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Rank"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"Rank"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rank"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Rank"> | Date | string;
};
export type RankCreateInput = {
    id?: string;
    code: string;
    label: string;
    rating: number;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutRankInput;
};
export type RankUncheckedCreateInput = {
    id?: string;
    code: string;
    label: string;
    rating: number;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutRankInput;
};
export type RankUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutRankNestedInput;
};
export type RankUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutRankNestedInput;
};
export type RankCreateManyInput = {
    id?: string;
    code: string;
    label: string;
    rating: number;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RankUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RankUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RankCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RankAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type RankMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RankMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RankSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type RankScalarRelationFilter = {
    is?: Prisma.RankWhereInput;
    isNot?: Prisma.RankWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type RankCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.RankCreateWithoutUsersInput, Prisma.RankUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.RankCreateOrConnectWithoutUsersInput;
    connect?: Prisma.RankWhereUniqueInput;
};
export type RankUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.RankCreateWithoutUsersInput, Prisma.RankUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.RankCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.RankUpsertWithoutUsersInput;
    connect?: Prisma.RankWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RankUpdateToOneWithWhereWithoutUsersInput, Prisma.RankUpdateWithoutUsersInput>, Prisma.RankUncheckedUpdateWithoutUsersInput>;
};
export type RankCreateWithoutUsersInput = {
    id?: string;
    code: string;
    label: string;
    rating: number;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RankUncheckedCreateWithoutUsersInput = {
    id?: string;
    code: string;
    label: string;
    rating: number;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RankCreateOrConnectWithoutUsersInput = {
    where: Prisma.RankWhereUniqueInput;
    create: Prisma.XOR<Prisma.RankCreateWithoutUsersInput, Prisma.RankUncheckedCreateWithoutUsersInput>;
};
export type RankUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.RankUpdateWithoutUsersInput, Prisma.RankUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.RankCreateWithoutUsersInput, Prisma.RankUncheckedCreateWithoutUsersInput>;
    where?: Prisma.RankWhereInput;
};
export type RankUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.RankWhereInput;
    data: Prisma.XOR<Prisma.RankUpdateWithoutUsersInput, Prisma.RankUncheckedUpdateWithoutUsersInput>;
};
export type RankUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RankUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RankCountOutputType = {
    users: number;
};
export type RankCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | RankCountOutputTypeCountUsersArgs;
};
export type RankCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankCountOutputTypeSelect<ExtArgs> | null;
};
export type RankCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type RankSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    label?: boolean;
    rating?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Rank$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.RankCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rank"]>;
export type RankSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    label?: boolean;
    rating?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rank"]>;
export type RankSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    label?: boolean;
    rating?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rank"]>;
export type RankSelectScalar = {
    id?: boolean;
    code?: boolean;
    label?: boolean;
    rating?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RankOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "label" | "rating" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["rank"]>;
export type RankInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Rank$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.RankCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RankIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RankIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RankPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rank";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        label: string;
        rating: number;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rank"]>;
    composites: {};
};
export type RankGetPayload<S extends boolean | null | undefined | RankDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RankPayload, S>;
export type RankCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RankCountAggregateInputType | true;
};
export interface RankDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rank'];
        meta: {
            name: 'Rank';
        };
    };
    findUnique<T extends RankFindUniqueArgs>(args: Prisma.SelectSubset<T, RankFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RankFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RankFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RankFindFirstArgs>(args?: Prisma.SelectSubset<T, RankFindFirstArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RankFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RankFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RankFindManyArgs>(args?: Prisma.SelectSubset<T, RankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RankCreateArgs>(args: Prisma.SelectSubset<T, RankCreateArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RankCreateManyArgs>(args?: Prisma.SelectSubset<T, RankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RankCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RankDeleteArgs>(args: Prisma.SelectSubset<T, RankDeleteArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RankUpdateArgs>(args: Prisma.SelectSubset<T, RankUpdateArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RankDeleteManyArgs>(args?: Prisma.SelectSubset<T, RankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RankUpdateManyArgs>(args: Prisma.SelectSubset<T, RankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RankUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RankUpsertArgs>(args: Prisma.SelectSubset<T, RankUpsertArgs<ExtArgs>>): Prisma.Prisma__RankClient<runtime.Types.Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RankCountArgs>(args?: Prisma.Subset<T, RankCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RankCountAggregateOutputType> : number>;
    aggregate<T extends RankAggregateArgs>(args: Prisma.Subset<T, RankAggregateArgs>): Prisma.PrismaPromise<GetRankAggregateType<T>>;
    groupBy<T extends RankGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RankGroupByArgs['orderBy'];
    } : {
        orderBy?: RankGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RankFieldRefs;
}
export interface Prisma__RankClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Rank$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rank$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RankFieldRefs {
    readonly id: Prisma.FieldRef<"Rank", 'String'>;
    readonly code: Prisma.FieldRef<"Rank", 'String'>;
    readonly label: Prisma.FieldRef<"Rank", 'String'>;
    readonly rating: Prisma.FieldRef<"Rank", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"Rank", 'Int'>;
    readonly isActive: Prisma.FieldRef<"Rank", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Rank", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Rank", 'DateTime'>;
}
export type RankFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where: Prisma.RankWhereUniqueInput;
};
export type RankFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where: Prisma.RankWhereUniqueInput;
};
export type RankFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where?: Prisma.RankWhereInput;
    orderBy?: Prisma.RankOrderByWithRelationInput | Prisma.RankOrderByWithRelationInput[];
    cursor?: Prisma.RankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RankScalarFieldEnum | Prisma.RankScalarFieldEnum[];
};
export type RankFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where?: Prisma.RankWhereInput;
    orderBy?: Prisma.RankOrderByWithRelationInput | Prisma.RankOrderByWithRelationInput[];
    cursor?: Prisma.RankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RankScalarFieldEnum | Prisma.RankScalarFieldEnum[];
};
export type RankFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where?: Prisma.RankWhereInput;
    orderBy?: Prisma.RankOrderByWithRelationInput | Prisma.RankOrderByWithRelationInput[];
    cursor?: Prisma.RankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RankScalarFieldEnum | Prisma.RankScalarFieldEnum[];
};
export type RankCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RankCreateInput, Prisma.RankUncheckedCreateInput>;
};
export type RankCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RankCreateManyInput | Prisma.RankCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RankCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    data: Prisma.RankCreateManyInput | Prisma.RankCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RankUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RankUpdateInput, Prisma.RankUncheckedUpdateInput>;
    where: Prisma.RankWhereUniqueInput;
};
export type RankUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RankUpdateManyMutationInput, Prisma.RankUncheckedUpdateManyInput>;
    where?: Prisma.RankWhereInput;
    limit?: number;
};
export type RankUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RankUpdateManyMutationInput, Prisma.RankUncheckedUpdateManyInput>;
    where?: Prisma.RankWhereInput;
    limit?: number;
};
export type RankUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where: Prisma.RankWhereUniqueInput;
    create: Prisma.XOR<Prisma.RankCreateInput, Prisma.RankUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RankUpdateInput, Prisma.RankUncheckedUpdateInput>;
};
export type RankDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
    where: Prisma.RankWhereUniqueInput;
};
export type RankDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RankWhereInput;
    limit?: number;
};
export type Rank$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type RankDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RankSelect<ExtArgs> | null;
    omit?: Prisma.RankOmit<ExtArgs> | null;
    include?: Prisma.RankInclude<ExtArgs> | null;
};
