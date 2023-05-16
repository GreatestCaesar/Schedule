@if ($paginator->hasPages())
    <nav class="block-page-control">
        <ul class="block-table-page-control">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="btn-previous-object disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                    <span class="page-link" aria-hidden="true">Предыдущая</span>
                </li>
            @else
                <li class="btn-previous-object">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">Предыдущая</a>
                </li>
            @endif

            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li class="number-item disabled" aria-disabled="true"><span class="page-link">{{ $element }}</span></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <li class="number-item active-btn" aria-current="page"><span class="page-link">{{ $page }}</span></li>
                        @else
                            <li class="number-item"><a class="page-link" href="{{ $url }}">{{ $page }}</a></li>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li class="btn-next-object">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">Следующая</a>
                </li>
            @else
                <li class="btn-next-object disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                    <span class="page-link" aria-hidden="true">Следующая</span>
                </li>
            @endif
        </ul>
    </nav>
@endif
